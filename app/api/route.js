import { queryExecute } from "./db";

//데이터 불러오기
export async function GET(){
    const data = await queryExecute('SELECT * from member') //데이터를 가져옴
    // const data = await queryExecute(`insert into member (id,email,name) values ('abc','HongGildong@gmail.com','홍길동')`)//데이터를 넣는 법
    // const data = await queryExecute(`update member set name = '성오권' where num = 2`)//데이터를 교체 및 업데이트 하는 법
    // const data = await queryExecute(`delete from member where num=15`) //데이터를 삭제함

   /*  const data = await queryExecute(`
        create table contact(
            name varchar(30),
            email varchar(100),
            contents text,
            num int not null auto_increment,
            primary key(num)
        )
    `) //데이터 테이블 생성 */


    // const data = await queryExecute(`drop table contact`)//데이터 테이블 삭제

    return Response.json(data);
}

export async function POST(req){
    const {id,email,name}= await req.json();
    console.log(id,email,name);
    const data = await queryExecute(`insert into member (id,email,name) values (?,?,?)`,[id,email,name])//데이터를 넣는 법
    return Response.json([]);
}
