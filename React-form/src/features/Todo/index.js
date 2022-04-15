import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import ListShift from "../Components/ListShift";

Todo.propTypes = {};

function Todo(props) {
  const initShift = [
    {
      name: "huy",
      timeArrive: "10:00",
      timeGo: "12:00",
      timeTotal: 2,
      indexSalary: 1,
      day:
        [{
          name: "T2",
          checked: true,
        },
        {
          name: "T3",
          checked: true,
        }]
    },
    {
      name: "huy123",
      timeArrive: "10:00",
      timeGo: "12:00",
      timeTotal: 2,
      indexSalary: 1,
      day:
        [{
          name: "T2",
          checked: true,
        },
        {
          name: "T3",
          checked: true,
        }]
    },
    {
      name: "huy567",
      timeArrive: "10:00",
      timeGo: "12:00",
      timeTotal: 2,
      indexSalary: 1,
      day:
        [{
          name: "T2",
          checked: true,
        },
        {
          name: "T3",
          checked: true,
        }]
    }
  ];
  const [shift, setShift] = useState(initShift);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const initDay = [
    {
      name: "T2",
      checked: false,
    },
    {
      name: "T3",
      checked: false,
    },
    {
      name: "T4",
      checked: false,
    },
    {
      name: "T5",
      checked: false,
    },
    {
      name: "T6",
      checked: false,
    },
    {
      name: "T7",
      checked: false,
    },
    {
      name: "CN",
      checked: false,
    }
  ]

  const [checkedArr, setCheckedArr] = useState(initDay);

  const handleChecked = (position) => {
    let tempArr = [...checkedArr];
    let tempItem = { ...tempArr[position] };
    tempItem.checked = !tempItem.checked;
    tempArr[position] = tempItem;
    setCheckedArr(tempArr);
  }

  const [isOpen, setIsOpen] = useState(false);
  function saveShift(e) {
    console.log(checkedArr);
    e.preventDefault();
    const newShift = {
      name: text1,
      timeArrive: text2,
      timeGo: text3,
      timeTotal: text4,
      indexSalary: text5,
      day: [...checkedArr].filter(e => e.checked === true)
    };
    setShift([...shift].concat(newShift));
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setCheckedArr(initDay);
    setIsOpen(!isOpen);

  }

  function deleteShift(s) {
    const removedShift = [...shift].filter(t => t !== s);
    setShift(removedShift);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    // setCheckedState([false, false, false, false, false, false, false]);
    setCheckedArr(initDay);
  }

  const sortName = () => {
    const cShift = JSON.parse(JSON.stringify(shift))
    const sortShift = cShift.sort((a, b) => (a.name > b.name) ? 1 : -1);
    setShift(sortShift);
  }


  const [filterShift, setFilterShift] = useState(shift);

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    setFilterShift(shift);
  }, [shift]);


  const search = (searchValue) => {
    if (searchValue !== '') {
      const filterShift = shift.filter(e => e.name.includes(searchValue));
      setFilterShift(filterShift);
    } else {
      setFilterShift(shift);
    }
  }

  return (
    <div className="home_page">
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://xuanthanhphat.vn/wp-content/uploads/2021/10/logo.png" />
          </a>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">CÔNG TY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">NHÂN SỰ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">CHẤM CÔNG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">CẤU HÌNH</a>
            </li>
          </ul>
        </div>

      </nav>

      <div className="body">
        <h1>Cấu hình chấm công</h1>
        <div className="group-tabs">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active text-primary" href="#">Ca làm việc</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Phụ cấp</a>
            </li>
          </ul>
        </div>

        <div className="search_add">
          <form>
            <input type="search" placeholder="Tìm kiếm" onChange={(e) => search(e.target.value)} />
          </form>
          <Button color="primary" onClick={togglePopup}>+ Thêm ca làm việc</Button>
        </div>

        {isOpen &&
          <>
            <div className="popup-box">
              <div className="box">
                <div className="header">
                  <h2>Tạo ca làm</h2>
                  <a onClick={togglePopup} className="close-icon"><i class="bi bi-x-lg"></i></a>
                </div>

                <Form onSubmit={saveShift}>
                  <FormGroup className="formGroup">
                    <Label >Tên ca làm</Label>
                    <Input type="text" placeholder="Ví dụ: Ca hành chính" value={text1} onChange={e => setText1(e.target.value)} />
                  </FormGroup>
                  <br />
                  <FormGroup className="formGroup">
                    <Label>Thời gian đến</Label>
                    <Input type="time" placeholder="--:-- --" value={text2} onChange={e => setText2(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="formGroup">
                    <Label>Thời gian về</Label>
                    <Input type="time" placeholder="--:-- --" value={text3} onChange={e => setText3(e.target.value)} />
                  </FormGroup>

                  <FormGroup className="formGroup">
                    <Label >Tổng thời gian làm</Label>
                    <Input type="number" min="0" placeholder="0" value={text4} onChange={e => setText4(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="formGroup">
                    <Label >Hệ số lương</Label>
                    <Input type="number" min="0" placeholder="0" value={text5} onChange={e => setText5(e.target.value)} />
                  </FormGroup>

                  <FormGroup check>
                    {checkedArr.map((e, i) => {
                      return (
                        <Label check>
                          <Input
                            type="checkbox"
                            value={e.name}
                            checked={e.checked}
                            onChange={() => handleChecked(i)}
                          />{' '}
                          {e.name}
                        </Label>
                      )
                    })}

                  </FormGroup>

                  <Button className="btn-save" color="primary" type="submit" >Lưu</Button>
                  <Button outline color="primary" onClick={togglePopup}>Huỷ</Button>
                </Form>
              </div>
            </div>
          </>}


        {/* <Table borderless striped>
          <thead>
            <tr>
              <th>STT</th>
              <th><Button onClick={sortName}>Tên ca</Button></th>
              <th>Giờ công</th>
              <th>Thời gian</th>
              <th>Ngày làm trong tuần</th>
              <th>Hệ số lương</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {true ? (displayShift(filterShift)) : (displayShift(shift))}
          </tbody>
        </Table> */}
        <ListShift
          deleteShift={deleteShift}
          shift={shift}
          filterShift={filterShift}
          sortName={sortName}
        />
      </div>
    </div >
  );
}

export default Todo;
