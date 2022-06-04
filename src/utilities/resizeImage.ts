import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
    width: number,
    height: number,
    filename: string
): Promise<void> => {
    const imagePath = path.resolve('assets/images', `${filename}.jpeg`);
    const thumbnailPath = path.resolve(
        'assets/thumbnails',
        `${filename}_${width}_${height}.jpeg`
    );
    try {
        await sharp(imagePath).resize({ width, height }).toFile(thumbnailPath);
    } catch (error) {
        console.error(error);
    }
};

export default resizeImage;
