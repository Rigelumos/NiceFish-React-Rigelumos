import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './index.scss';

export default props => {
  //导航对象
  const navigate = useNavigate();

  //TODO:实现业务逻辑，与服务端对接。
  return (
    <div className="sys-param-container">
      <Card className="mb-3">
        <Card.Header>文章设置</Card.Header>
        <Card.Body>
          <form role="form">
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">文章标题最小长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="文章标题最小长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">文章标题最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="文章标题最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">文章内容最小长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="文章内容最小长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">文章内容最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="文章内容最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">文章列表显示条数：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="文章列表显示条数" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">每日发文数量限制：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="每日发文数量限制" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">每篇文章附件数量：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="每篇文章附件数量" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">每个附件最大体积：</label>

              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="每个附件最大体积" />
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Header>评论设置</Card.Header>
        <Card.Body>
          <form role="form">
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">评论最小长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="评论最小长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">评论最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="评论最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">评论列表每页显示条数：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="评论列表每页显示条数" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">评论时间间隔（分钟）：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="评论时间间隔（分钟）" />
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Header>用户设置</Card.Header>
        <Card.Body>
          <form role="form">
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">用户名最小长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="用户名最小长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">用户名最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="用户名最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">密码最小长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="密码最小长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">密码最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="密码最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">个人简介最大长度：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="个人简介最大长度" />
              </div>
            </div>
            <div className="row mb-3 text-right">
              <label className="col-md-4 col-form-label">新用户自动禁言时间（5分钟）：</label>
              <div className="col-md-8">
                <input type="text" required className="form-control" placeholder="新用户自动禁言时间" />
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
      <div className='mb-3'>
        <button type="button" className="btn btn-primary me-3">保存</button>
        <button type="button" className="btn btn-danger" onClick={() => { navigate(-1) }}>取消</button>
      </div>
    </div>
  );
};