import logo from './logo.svg';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      list: [], // Danh sách các item
      item: '', // Item hiện tại
    };
  }
  // Hàm xử lý khi người dùng nhập giá trị mới
  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };
  // Hàm thêm item mới vào danh sách
  handleAddItem = () => {
    const { item, list } = this.state;
    if (item.trim()) { // Kiểm tra nếu item không rỗng
      this.setState({
        list: [...list, item], // Thêm item vào danh sách
        item: '', // Reset giá trị input
      });
    }
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Todo List</h1>
        {/* Input để nhập item */}
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
          placeholder="Nhập công việc..."
        />
        {/* Nút thêm item */}
        <button onClick={this.handleAddItem}>Add</button>

        {/* Hiển thị danh sách */}
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
