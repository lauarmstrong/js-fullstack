import supertest from 'supertest';
import path from 'path';
import fs from 'fs';
import app from '../index';
import resizeImage from '../utilities/resizeImage';

const request = supertest(app);

describe('Endpoint GET request', () => {
    it('successfully gets the image endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('successfully gets the image endpoint when all query strings are provided', async () => {
        const response = await request.get(
            '/api/imageApi?filename=fox&height=100&width=100'
        );
        expect(response.status).toBe(200);
    });
    it('responds with error code 404 if all query string are not provided', async () => {
        const response = await request.get(
            '/api/imageApi?filename=fox&height=100'
        );
        expect(response.status).toBe(404);
    });
});

describe('ResizeImage function', async () => {
    it('creates a file with resized image', async () => {
        const fileName = 'dog';
        const width = 200;
        const height = 200;
        const newThumbnailPath = path.resolve(
            'assets/thumbnails',
            `${fileName}_${width}_${height}.jpeg`
        );
        if (fs.existsSync(newThumbnailPath)) {
            fs.unlinkSync(newThumbnailPath);
        }
        await resizeImage(200, 200, fileName);
        expect(fs.existsSync(newThumbnailPath)).toBeTruthy();
    });
});
