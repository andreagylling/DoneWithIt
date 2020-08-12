import client from "./client";
const endpoint = "/listings";

const config = {};

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("description", listing.description);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: `image_${index}`,
      type: "image/jpeg",
      uri: image,
    });
  });

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
