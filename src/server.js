import express from 'express';
import morgan from 'morgan';//미들웨어 사용할때 유용함

const PORT = 4000;

const app = express();
const logger = morgan("dev");//morgan라이브러리는 get,path, status code이 모든정보를 가지고 있다.

//express에선, route handler에는 event가 없지만 두개의 좋은 오브젝트가 있다.
//하나는 req(request)오브젝트 다른하나는 res(response)오브젝트

// const routeLogger = (req, res, next) => {
//     next();
// }

// const methodLogger = (req, res, next)=>{//미들웨어도 3개의 오브젝트가 필요하다.
//     console.log(`${req.method} ${req.url}`);
//     next();//get에 이함수를 실행시킨다음 다음함수를 실행시켜라
// }//logger(나무꾼)경로에 모두 적용



const home = (req, res)=>{//첫번째 오브젝트는req 두번째는 무조건res 오브젝트이다.
    //next오브젝트는 다음 함수를 실행시켜준다.
    
    return res.send("I love middlewares");//서버가 응답을 받으면 끝내준다. 서버가 request를 끝내버렸다.
};

const login = (req, res) =>{
    return res.send('login');
}

//app.use(logger);//app.use는 글로벌 미들웨어를 만들수 있게 해준다. 모든 라우트(경로)마다 미들웨어를 호출해준다.
//먼저 use가 나와야하고 그다음에 get 이 나와야한다.

app.use(logger);
//app.use(methodLogger, routeLogger);
app.get("/", home);//get으로 누가 서버에 리퀘스트 하는지 가져온다. => 헤이 난 이 서버가 필요해 ("/"여기를 가려고하는구나, 이함수를 실행시켜 줄게)
app.get("/login", login);
//모든 handler(controler)는 미들웨어다.

const handleListening = () => console.log(`server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //서버가 사람들이 뭔가를 요청할 때까지 기다리게 해준다. // 4000은 포트번호 handleListening은 콜백함수

//4.0부터 다시보기
