import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export class AlertComponent extends React.Component {
    render() {
        return (
            <div class="alert alert-warning" role="alert">
                Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
            </div>
        )
    }
}
export default AlertComponent;