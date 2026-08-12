import styled from 'styled-components';

const S = {
  Container: styled.div`
    max-width: 46.5rem;
    padding: 0.8125rem 1.21875rem 2.4375rem 1.21875rem;
    margin: 0 auto;
  `,

  SectionTitle: styled.h3`
    font-size: 3rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
    border-left: 6px solid ${({ theme }) => theme.color.primary};
    padding-left: 30px;
    margin: 2.5em 0 1.5em;

    @media screen and (max-width: 1919px) {
      font-size: 2rem;
      padding-left: 20px;
      margin: 2.5em 0 1.5em;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1.75rem;
      border-left: 4px solid ${({ theme }) => theme.color.primary};
      padding-left: 15px;
      margin: 2.25em 0 1.5em;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
      border-left: 2px solid ${({ theme }) => theme.color.primary};
      padding-left: 12px;
      margin: 2em 0 1.25em;
    }
  `,

  Title: styled.h1`
    font-size: 3rem;
    color: #ffeee4;
    font-weight: 500;
    margin-bottom: 0.5em;
  `,

  ListWrap: styled.div`
    display: flex;
    align-items: center;
    margin: 2em 0 3em 0;

    p {
      font-size: 1.5rem;
      color: #ffeee4;

      @media screen and (max-width: 1919px) {
        font-size: 1.75rem;
      }

      @media screen and (max-width: 1079px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  `,

  ListTextWrap: styled.ul`
    margin: 0 8px;
    text-align: center;
  `,

  ListText: styled.li`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.primary};
    line-height: 2em;
  `,

  Table: styled.table`
    width: 100%;
    margin-top: 3.5em;

    span {
      color: ${({ theme }) => theme.color.lightGray};
    }

    tr {
      display: flex;
    }

    td:first-child {
      text-align: right;
      padding-right: 30px;
      color: #ffeee4;
      flex: 1;

      @media screen and (max-width: 1919px) {
        padding-right: 20px;
      }

      @media screen and (max-width: 1079px) {
        padding-right: 15px;
      }

      @media screen and (max-width: 768px) {
        padding-right: 10px;
      }
    }

    td {
      border-top: 1px solid ${({ theme }) => theme.color.gray};
      border-bottom: 1px solid ${({ theme }) => theme.color.gray};
      padding: 16px 16px 16px 10px;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.lightGray};
      flex: 3;
      line-height: 40px;

      @media screen and (max-width: 1919px) {
        font-size: 1.5rem;
        line-height: 35px;
      }

      @media screen and (max-width: 1079px) {
        font-size: 1.3rem;
        padding: 12px 6px;
        line-height: 30px;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 8px 4px;
        line-height: 20px;
      }
    }
  `,

  DescText: styled.p`
    font-size: 1rem;
    color: #ffeee4;
    line-height: 2rem;
    white-space: pre-wrap;
  `,

  ProjectTitle: styled.button`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primary};
    margin-top: 3em;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: underline;

    @media screen and (max-width: 1919px) {
      font-size: 1.75rem;
    }

    @media screen and (max-width: 1079px) {
      font-size: 1.5rem;
      margin-top: 2.5em;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
      margin-top: 1.75em;
    }
  `,

  HomeButtonWrap: styled.div`
    width: 100%;
    margin: 2em 0 4em;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 3em 0 3em;
    }

    button {
      font-size: 1.25rem;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.color.lightGray};
      cursor: pointer;
      transition: 0.2s;
      border-radius: 6px;
      padding: 6px 8px;

      :hover {
        background-color: ${({ theme }) => theme.color.lightGray};
        color: ${({ theme }) => theme.color.primary};
      }
    }
  `,

  HomeButton: styled.button``,
};

export default S;
