import React from "react";
import Button from "react-bootstrap/Button";
export default function page() {
  
  return (
    <>
      <div className="flex">
        <div>
          <div className="bg-blue-300 w-64 h-[800px]">
            <li>
              <h1 className="text-red-500 text-5xl ml-[20px] font-bold">
                FOODIE
              </h1>
              <div className="flex">
                <i className="fa-solid fa-house mt-[60px] ml-[30px]"></i>
                <p className="text-xl ml-[30px] mt-[55px]">Trang chủ</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-user mt-[60px] ml-[30px]"></i>
                <p className="text-xl ml-[30px] mt-[55px]">Quản lí tài khoản</p>
              </div>

              <div className="flex">
                <i className="fa-solid fa-burger mt-[60px] ml-[30px]"></i>
                <p className="text-xl ml-[30px] mt-[55px]">Quản lí sản phẩm</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-list mt-[60px] ml-[30px]"></i>
                <p className="text-xl ml-[30px] mt-[55px]">Quản lí danh mục</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-right-from-bracket mt-[60px] ml-[30px]"></i>
                <p className="text-xl ml-[30px] mt-[55px]">Đăng xuất</p>
              </div>
            </li>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <i className="fa-solid fa-users mt-6 ml-5"></i>{" "}
              <span className="font-bold text-2xl mt-4">Quản lí tài khoản</span>
            </div>

            <input
              className="w-60 h-10 rounded-2xl border-2 ml-28 mt-3"
              type="text"
              placeholder="tìm kiếm tại đây"
            ></input>
          </div>
          <div className="table-wrapper">
            <table width={"100%"} style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Hinh anh</th>
                  <th>Ten nguoi dung</th>
                  <th>Email</th>
                  <th>So dien thoai</th>
                  <th>Dia chi</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src="https://www.cookingclassy.com/wp-content/uploads/2023/08/hamburgers-20.jpg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>panh2005</td>
                  <td>panh2005@gmail.com</td>
                  <td>0987645242</td>
                  <td>Hai Phong</td>
                  <td>
                    <Button variant="primary">Xem</Button>{" "}
                    <Button variant="danger">Chan</Button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src="https://www.cookingclassy.com/wp-content/uploads/2023/08/hamburgers-20.jpg"
                      alt=""
                      width={50}
                      height={50}

                    />
                  </td>
                  <td>panh2005</td>
                  <td>panh2005@gmail.com</td>
                  <td>0987645242</td>
                  <td>Hai Phong</td>
                  <td>
                    <Button variant="primary">Xem</Button>{" "}
                    <Button variant="danger">Chan</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
