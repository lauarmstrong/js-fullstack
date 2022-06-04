import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utilities/resizeImage';

const imageApi: Router = Router();

imageApi.get('/', async (req: Request, res: Response) => {
    // Obtain data from API query parameters
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const filename = req.query.filename as string;
    const thumbnailFile = path.resolve(
        'assets/thumbnails',
        `${filename}_${width}_${height}.jpeg`
    );

    // Handle missing data
    if (!width || !height || !filename) {
        return res
            .status(404)
            .send(
                'Ensure you have provided a width, height and name in the URL'
            );
    }
    // Check if path exists the transform image and send as a response
    if (fs.existsSync(thumbnailFile)) {
        res.sendFile(thumbnailFile);
    } else {
        try {
            await resizeImage(width, height, filename);
        } catch (error) {
            console.error(error);
        }
        res.sendFile(thumbnailFile);
    }
});

export default imageApi;
