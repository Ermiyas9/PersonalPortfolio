
/* this func will take the relative path of the image and it will construct it into absolut path
it take the base url of website  and append the relative path onto it and it will pass it bak  
simply it will help dynamically import image components */
export const getImageUrl =(path)=>{
    return new URL (`assets/$(path)`, import.meta.url).href;
}