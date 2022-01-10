export const trending = (req, res) => res.render("home",{pageTitle: "Home"});//view엔진이 pug로 작동한다는것을 알아서 렌더로  home을 불러올 수 잇다.
//두번째 파라미터는 해당페이지에 보내줄 변수이다.

export const see = (req,res) => res.render("watch");

export const edit = (req,res) => res.render("edit");

export const search = (req,res) => {res.send("Search Video");}

export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("delete Video");
}
export const upload = (req,res) => res.send("Upload Video");
