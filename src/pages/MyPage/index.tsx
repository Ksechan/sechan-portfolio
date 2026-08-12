import { Link, useNavigate } from 'react-router-dom';
import { projectList } from '@/data';
import S from './style';

const MyPage = () => {
  const navigate = useNavigate();
  const sendEmailHandler = () => {
    return (window.location.href = 'mailto:rlatpcks77@gmail.com');
  };

  const onHomeButtonHandler = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.SectionTitle>김세찬</S.SectionTitle>
      <S.ListWrap>
        <p>* 저는</p>
        <S.ListTextWrap>
          <S.ListText>변화를 추구하는</S.ListText>
          <S.ListText>사람을 좋아하는</S.ListText>
          <S.ListText>개발문화를 고민하는</S.ListText>
        </S.ListTextWrap>
        <p>엔지니어입니다.</p>
      </S.ListWrap>

      <S.DescText>{`안녕하세요. 2년차 프론트엔드 개발자 김세찬입니다.\n스타트업 '인베스티'에서 약 1년 4개월간 frontend-manager로 근무하였습니다.\n주로 디자이너와 소통하며 문제를 찾고 해결하려고 노력하였으며, 효율적인 협업을 위한 개발역량을 쌓아왔습니다.\n\n아직은 많이 부족하다고 생각하여 다양한 컨텐츠에서 개발 관련 정보 및 강의 시청을 하고 있으며,\n많은 동료들과 함께 성장할 수 있는 좋은 경험을 쌓고 싶습니다.`}</S.DescText>

      <S.Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>GitHub</strong>
            </td>
            <td>
              <Link
                to="https://github.com/Ksechan"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <span>https://github.com/Ksechan</span>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Contact</strong>
            </td>
            <td>010-3356-9426</td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>
              <Link
                onClick={sendEmailHandler}
                style={{ textDecoration: 'none' }}
                to={''}
              >
                <span>rlatpcks77@gmail.com</span>
              </Link>
            </td>
          </tr>
        </tbody>
      </S.Table>

      <S.SectionTitle>Experiences</S.SectionTitle>
      {projectList.map((item) => {
        if (item.id > 0) {
          return (
            <div key={item.id}>
              <S.ProjectTitle
                onClick={() => {
                  navigate('/project', { state: { item } });
                }}
              >
                *{item.project?.projectTitle}
              </S.ProjectTitle>
              <S.Table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>period</strong>
                    </td>
                    <td>{item.period}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>project</strong>
                    </td>
                    <td>{item.title}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>tech</strong>
                    </td>
                    <td>{item.tech}</td>
                  </tr>
                </tbody>
              </S.Table>
            </div>
          );
        }
      })}
      <S.HomeButtonWrap>
        <p>감사합니다</p>
        <button onClick={onHomeButtonHandler}>HOME</button>
      </S.HomeButtonWrap>
    </S.Container>
  );
};

export default MyPage;
