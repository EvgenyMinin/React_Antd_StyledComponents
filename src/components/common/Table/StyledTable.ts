import { Table } from 'antd';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
  .ant-table {
    background-color: ${({ theme }) => theme.colors.tableBackground};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .ant-table-thead tr th {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .ant-pagination-disabled button {
    background-color: ${({ theme }) => theme.colors.tableBackground};

    .anticon {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .ant-pagination-item-active {
    border-color: ${({ theme }) => theme.colors.border};
    a {
      color: ${({ theme }) => theme.colors.primaryColor};
      background-color: ${({ theme }) => theme.colors.tableBackground};
    }
  }
`;
