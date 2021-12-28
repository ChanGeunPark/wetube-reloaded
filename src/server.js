import express from 'express';

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //서버가 사람들이 뭔가를 요청할 때까지 기다리게 해준다. // 4000은 포트번호 handleListening은 콜백함수

//3.1