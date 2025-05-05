export class Memory {
    data = new SharedArrayBuffer(1024 * 1024 * 10); // 10MB

    isValidAddress(address: number, size: number) {
        return address >= 0 && address + size <= this.data.byteLength;
    }

    // Int
    setInt32(address: number, value: number) {
        const view = new Int32Array(this.data, address, 1);
        view[0] = value;
    }
    getInt32(address: number) {
        const view = new Int32Array(this.data, address, 1);
        return view[0];
    }
    setInt64(address: number, value: number) {
        const view = new BigInt64Array(this.data, address, 1);
        view[0] = BigInt(value);
    }
    getInt64(address: number) {
        const view = new BigInt64Array(this.data, address, 1);
        return Number(view[0]);
    }

    // Float
    setFloat32(address: number, value: number) {
        const view = new Float32Array(this.data, address, 1);
        view[0] = value;
    }
    getFloat32(address: number) {
        const view = new Float32Array(this.data, address, 1);
        return view[0];
    }
    setFloat64(address: number, value: number) {
        const view = new Float64Array(this.data, address, 1);
        view[0] = value;
    }
    getFloat64(address: number) {
        const view = new Float64Array(this.data, address, 1);
        return view[0];
    }

    // string
    // we store the length of the array buffer in the first bytes using the same system as utf-8.
    // We use the first 7 bits of each byte to store length, the last bit is used to indicate if there are more bytes.
    getLengthFromBuffer(buffer: Uint8Array) {
        let length = 0;
        let index = 0;
        let shift = 0;
        
        while (index < buffer.length) {
            const byte = buffer[index++];
            
            // Extract the 7 bits of data (bits 0-6)
            const data = byte & 0b01111111;
            
            // Add these bits to our length
            length |= (data << shift);
            
            // Check the continuation bit (bit 7)
            // If it's 0, this is the last byte
            if ((byte & 0b10000000) === 0) {
                break;
            }
            
            // Move to the next 7 bits
            shift += 7;
        }
        
        return length;
    }

    makeLengthBuffer(length: number) {
        // This will hold our bytes
        const bytes: number[] = [];
        
        // Keep processing until we've encoded the entire length
        do {
            // Extract the lowest 7 bits of the length
            let byte = length & 0b01111111;
            
            // Shift the length right by 7 bits
            length >>>= 7;
            
            // If there's more data to encode, set the high bit (continuation bit)
            if (length > 0) {
                byte |= 0b10000000;
            }
            
            // Add this byte to our array
            bytes.push(byte);
        } while (length > 0);
        
        // Create and return a Uint8Array from our bytes
        return { data: new Uint8Array(bytes), size: bytes.length };
    }

    // set string
    setString(address: number, value: string) {
        const encoder = new TextEncoder();
        const encoded = encoder.encode(value);
        const lengthBuffer = this.makeLengthBuffer(encoded.length);
        const buffer = new Uint8Array(lengthBuffer.size + encoded.length);
        buffer.set(lengthBuffer.data, 0);
        buffer.set(encoded, lengthBuffer.size);
        const view = new Uint8Array(this.data, address, buffer.length);
        view.set(buffer);
    }

    // get string
    getString(address: number) {
        const view = new Uint8Array(this.data, address);
        const length = this.getLengthFromBuffer(view);
        const buffer = new Uint8Array(view.buffer, view.byteOffset + view.byteLength - length, length);
        const decoder = new TextDecoder();
        return decoder.decode(buffer);
    }
}