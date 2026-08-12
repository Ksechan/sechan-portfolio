import S from './style';
import CommonS from '../style';
import { ProjectListProps } from '@/pages/Home/components/PageInformation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ProjectProgress = ({ item }: ProjectListProps) => {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isLaptop = useMediaQuery('(max-width: 1079px)');

  return (
    <>
      {item.type === 'mobile' ? (
        <S.ThirdSectionWrap>
          <CommonS.SectionNumber marginBottom={60}>0 3</CommonS.SectionNumber>
          <S.ThirdSectionName>PROGRESS</S.ThirdSectionName>
          <S.ThirdSection>
            <S.ThirdSectionImageWrap>
              <S.ThirdSectionImage
                src={item.project?.projectProgressImg01_01}
                marginRight={isTablet ? 0 : isLaptop ? 12 : 30}
              />
              <S.ThirdSectionImage
                src={item.project?.projectProgressImg01_02}
              />
            </S.ThirdSectionImageWrap>
            <S.ThirdSectionNameWrap>
              <S.ThirdSectionDescription>
                {item.project?.projectProgressDesc01}
              </S.ThirdSectionDescription>
              <S.ThirdSectionName marginTop={40}>
                {item.project?.projectProgressDescTitle01}
              </S.ThirdSectionName>
            </S.ThirdSectionNameWrap>
          </S.ThirdSection>

          <S.ThirdSection right={!isTablet}>
            {isTablet ? (
              <>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg02_01}
                  />
                  {item.project?.projectProgressImg02_02 !== '' ? (
                    <S.ThirdSectionImage
                      src={item.project?.projectProgressImg02_02}
                      marginLeft={isTablet ? 0 : 30}
                    />
                  ) : null}
                </S.ThirdSectionImageWrap>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionDescription marginRight={isTablet ? 0 : 80}>
                    {item.project?.projectProgressDesc02}
                  </S.ThirdSectionDescription>
                  <S.ThirdSectionName marginTop={60}>
                    {item.project?.projectProgressDescTitle02}
                  </S.ThirdSectionName>
                </S.ThirdSectionNameWrap>
              </>
            ) : (
              <>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionDescription marginRight={80}>
                    {item.project?.projectProgressDesc02}
                  </S.ThirdSectionDescription>
                  <S.ThirdSectionName marginTop={60}>
                    {item.project?.projectProgressDescTitle02}
                  </S.ThirdSectionName>
                </S.ThirdSectionNameWrap>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg02_01}
                  />
                  {item.project?.projectProgressImg02_02 !== '' ? (
                    <S.ThirdSectionImage
                      src={item.project?.projectProgressImg02_02}
                      marginLeft={30}
                    />
                  ) : null}
                </S.ThirdSectionImageWrap>
              </>
            )}
          </S.ThirdSection>

          <S.ThirdSection>
            <S.ThirdSectionImageWrap>
              {item.project?.projectProgressImg03_02 ? (
                <S.ThirdSectionSubImage
                  src={item.project?.projectProgressImg03_02}
                />
              ) : null}

              <S.ThirdSectionImage
                src={item.project?.projectProgressImg03_01}
              />
            </S.ThirdSectionImageWrap>
            <S.ThirdSectionNameWrap>
              <S.ThirdSectionName marginBottom={60}>
                {item.project?.projectProgressDescTitle03}
              </S.ThirdSectionName>
              <S.ThirdSectionDescription>
                {item.project?.projectProgressDesc03}
              </S.ThirdSectionDescription>
            </S.ThirdSectionNameWrap>
          </S.ThirdSection>

          <S.ThirdSection right>
            {isTablet ? (
              <>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg04_01}
                    marginRight={isTablet ? 0 : isLaptop ? 12 : 20}
                  />
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg04_02}
                    marginTop={isTablet ? 0 : 60}
                  />
                </S.ThirdSectionImageWrap>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionName marginBottom={60}>
                    {item.project?.projectProgressDescTitle04}
                  </S.ThirdSectionName>
                  <S.ThirdSectionDescription marginRight={40}>
                    {item.project?.projectProgressDesc04}
                  </S.ThirdSectionDescription>
                </S.ThirdSectionNameWrap>
              </>
            ) : (
              <>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionName marginBottom={60}>
                    {item.project?.projectProgressDescTitle04}
                  </S.ThirdSectionName>
                  <S.ThirdSectionDescription marginRight={40}>
                    {item.project?.projectProgressDesc04}
                  </S.ThirdSectionDescription>
                </S.ThirdSectionNameWrap>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg04_01}
                    marginRight={isLaptop ? 12 : 20}
                  />
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg04_02}
                    marginTop={isTablet ? 0 : 60}
                  />
                </S.ThirdSectionImageWrap>
              </>
            )}
          </S.ThirdSection>
        </S.ThirdSectionWrap>
      ) : (
        // desktop view
        <S.ThirdSectionWrap>
          <CommonS.SectionNumber marginBottom={60}>0 3</CommonS.SectionNumber>
          <S.ThirdSectionName>PROGRESS</S.ThirdSectionName>
          <S.ThirdSection>
            <S.ThirdSectionImageWrap>
              {item.title === 'school-trip' ? (
                <>
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg01_01}
                    marginRight={isLaptop ? 12 : 30}
                  />
                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg01_02}
                  />
                </>
              ) : (
                <S.ThirdSectionWebImage
                  src={item.project?.projectProgressImg01_01}
                />
              )}
            </S.ThirdSectionImageWrap>
            <S.ThirdSectionNameWrap>
              <S.ThirdSectionDescription>
                {item.project?.projectProgressDesc01}
              </S.ThirdSectionDescription>
              <S.ThirdSectionName marginTop={40}>
                {item.project?.projectProgressDescTitle01}
              </S.ThirdSectionName>
            </S.ThirdSectionNameWrap>
          </S.ThirdSection>

          <S.ThirdSection right>
            {isTablet ? (
              <>
                {item.title === 'school-trip' || item.title === 'alba-edu' ? (
                  <>
                    <S.ThirdSectionIndependentImageWrap>
                      <S.ThirdSectionWebIndependentImage
                        src={item.project?.projectProgressImg02_01}
                        absolute
                      />
                      <S.ThirdSectionWebIndependentImage
                        src={item.project?.projectProgressImg02_02}
                      />
                    </S.ThirdSectionIndependentImageWrap>
                  </>
                ) : (
                  <S.ThirdSectionImageWrap>
                    <S.ThirdSectionWebImage
                      src={item.project?.projectProgressImg02_01}
                    />
                  </S.ThirdSectionImageWrap>
                )}
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionDescription marginRight={isTablet ? 0 : 80}>
                    {item.project?.projectProgressDesc02}
                  </S.ThirdSectionDescription>
                  <S.ThirdSectionName
                    marginTop={60}
                    marginRight={isTablet ? 0 : 30}
                  >
                    {item.project?.projectProgressDescTitle02}
                  </S.ThirdSectionName>
                </S.ThirdSectionNameWrap>
              </>
            ) : (
              <>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionDescription marginRight={80}>
                    {item.project?.projectProgressDesc02}
                  </S.ThirdSectionDescription>
                  <S.ThirdSectionName marginTop={60} marginRight={30}>
                    {item.project?.projectProgressDescTitle02}
                  </S.ThirdSectionName>
                </S.ThirdSectionNameWrap>
                {item.title === 'school-trip' || item.title === 'alba-edu' ? (
                  <>
                    <S.ThirdSectionIndependentImageWrap>
                      <S.ThirdSectionWebIndependentImage
                        src={item.project?.projectProgressImg02_01}
                        absolute
                      />
                      <S.ThirdSectionWebIndependentImage
                        src={item.project?.projectProgressImg02_02}
                      />
                    </S.ThirdSectionIndependentImageWrap>
                  </>
                ) : (
                  <S.ThirdSectionImageWrap>
                    <S.ThirdSectionWebImage
                      src={item.project?.projectProgressImg02_01}
                    />
                  </S.ThirdSectionImageWrap>
                )}
              </>
            )}
          </S.ThirdSection>

          <S.ThirdSection>
            <S.ThirdSectionImageWrap>
              {item.title === 'school-trip' ? (
                <>
                  {item.project?.projectProgressImg03_02 ? (
                    <S.ThirdSectionImage
                      src={item.project?.projectProgressImg03_02}
                      marginRight={isTablet ? 0 : isLaptop ? 12 : 20}
                    />
                  ) : null}

                  <S.ThirdSectionImage
                    src={item.project?.projectProgressImg03_01}
                  />
                </>
              ) : (
                <S.ThirdSectionWebImage
                  src={item.project?.projectProgressImg03_01}
                />
              )}
            </S.ThirdSectionImageWrap>
            <S.ThirdSectionNameWrap>
              <S.ThirdSectionName marginBottom={60}>
                {item.project?.projectProgressDescTitle03}
              </S.ThirdSectionName>
              <S.ThirdSectionDescription>
                {item.project?.projectProgressDesc03}
              </S.ThirdSectionDescription>
            </S.ThirdSectionNameWrap>
          </S.ThirdSection>

          <S.ThirdSection right>
            {isTablet ? (
              <>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionWebImage
                    src={item.project?.projectProgressImg04_01}
                  />
                </S.ThirdSectionImageWrap>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionName marginBottom={60} marginRight={20}>
                    {item.project?.projectProgressDescTitle04}
                  </S.ThirdSectionName>
                  <S.ThirdSectionDescription marginRight={40}>
                    {item.project?.projectProgressDesc04}
                  </S.ThirdSectionDescription>
                </S.ThirdSectionNameWrap>
              </>
            ) : (
              <>
                <S.ThirdSectionNameWrap>
                  <S.ThirdSectionName marginBottom={60} marginRight={20}>
                    {item.project?.projectProgressDescTitle04}
                  </S.ThirdSectionName>
                  <S.ThirdSectionDescription marginRight={40}>
                    {item.project?.projectProgressDesc04}
                  </S.ThirdSectionDescription>
                </S.ThirdSectionNameWrap>
                <S.ThirdSectionImageWrap>
                  <S.ThirdSectionWebImage
                    src={item.project?.projectProgressImg04_01}
                  />
                </S.ThirdSectionImageWrap>
              </>
            )}
          </S.ThirdSection>
        </S.ThirdSectionWrap>
      )}
    </>
  );
};

export default ProjectProgress;
