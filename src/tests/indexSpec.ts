import supertest from 'supertest';
import sharp from 'sharp';
import app from '../index';
import resizeImage from '../utilities/resizeImage';

const request = supertest(app);

describe('Endpoint GET request', () => {
    it('successfully gets the image endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
});

// describe('ResizeImage function', async() => {
//     it('resizes the image when provided a width, height and file', () => {
//         const response = await resizeImage(200, 200, imageFile);
//         expect
//     })
// })
