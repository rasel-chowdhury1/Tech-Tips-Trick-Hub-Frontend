import axios from "axios";
import { toast } from "sonner";

const uploadImageToCloudinary = async (
  imageFile: FileList | null,
): Promise<string | undefined> => {
  const cloudName = "di8ify5lo";
  const uploadPreset = "imageUpload";
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  if (!imageFile || imageFile.length === 0) {
    return undefined;
  }

  const formData = new FormData();

  formData.append("file", imageFile[0]);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(cloudinaryUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.secure_url;
  } catch (error) {
    if (error) {
      const axiosError = error as { message: string };

      toast.error(`Image upload failed: ${axiosError.message}`);

      return undefined;
    }
  }
};

export default uploadImageToCloudinary;
