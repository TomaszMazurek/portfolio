import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Articles = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <div>
              {item.created_date.split("T")[0]} /{" "}
              {item.created_date.split("T")[1].split(".")[0]}
            </div>,
          ]}
        >
          <List.Item.Meta
            style={{
              color: "rgb(220,220,220,0.65)",
              textAlign: "left",
              paddingTop: "17px",
              wordSpacing: "5px",
              textShadow: "2px 2px 5px dark-blue",
              fontFamily: "Tahoma, Geneva, sans-serif",
              fontWeight: "lighter",
              fontSize: "17px",
            }}
            title={
              <div>
                <a href={`/blog/${item.id}`}>{item.title} </a>
              </div>
            }
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
