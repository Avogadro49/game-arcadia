import noImage from "../assets/images/themes/no_image/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"

export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
