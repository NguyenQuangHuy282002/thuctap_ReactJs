import React from "react";
import PropTypes from 'prop-types';
import { Table, Button } from "reactstrap";

ListShift.propTypes = {
    deleteShift: PropTypes.func.isRequired,
    sortName: PropTypes.func.isRequired,
    shift: PropTypes.array.isRequired,
    filterShift: PropTypes.array.isRequired,

};

function ListShift(props) {

    const { shift, filterShift } = props;

    const deleteShift = (shift) => {
        props.deleteShift(shift);
    }
    const sortName = () => {
        props.sortName();
    }
    const displayShift = (shift) => {
        return shift.map((s, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.timeTotal}</td>
                <td>{s.timeArrive} - {s.timeGo}</td>
                <td>
                    {s.day.map((e, i) => {
                        if (i !== s.day.length - 1) {
                            return (e.name + "-")
                        }
                        return (e.name)
                    })}
                </td>
                <td>{s.indexSalary}</td>
                <td>True</td>
                <td><Button color="primary" onClick={() => { deleteShift(s) }}><i class="bi bi-pencil-fill"></i> Sửa</Button></td>
            </tr>
        ))
    }
    return (
        <Table borderless striped>
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
        </Table>
    )
}

export default ListShift;