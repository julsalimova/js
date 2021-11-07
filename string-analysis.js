const path = "/users/download/index.scss" 

const isHtml = path  => {
const requriedExt = ".html"
const pathExt = path.slice(-5);

return pathExt == requriedExt 
}
console.log(isHtml(path)) 