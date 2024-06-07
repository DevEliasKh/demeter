export function navigate(name: string) {
   let path = "";
   switch (name) {
      case "خانه":
         path = "/";
         break;
      case "مقالات":
         path = "/blogs";
         break;
      case "گالری":
         path = "/gallery";
         break;
      case "درباره ما":
         path = "/about-us";
         break;
      case "تماس با ما":
         path = "/contact-us";
         break;
      default:
         break;
   }
   return path;
}
