import { Table } from 'antd';


const AntdTable=({data,loading,columns,pagination,size,handleChange})=>{
        return (
            <Table columns={columns}
                   rowKey={record => record.id}
                   dataSource={data}
                   pagination={pagination}
                   onChange={handleChange}
                   loading={loading}
                   bordered
                   size={size}
            />
        );

}

export default AntdTable