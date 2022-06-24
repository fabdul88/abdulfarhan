import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './featuredProj.scss';
import { ProjectsData } from '../Projects/ProjectsData';
import { Icon } from '../Icon/Icon';
const FeaturedProj = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    }
    return scrollToTop;
  }, []);
  return (
    <div className="proj">
      <div className="proj__flexWrapper">
        {ProjectsData.filter(
          (proj) => proj.featured === true && proj.featured
        ).map((item) => (
          <Fragment key={item.id}>
            <div className="proj__wrapperCard">
              <img
                loading="lazy"
                className="proj__img"
                src={item.image}
                alt=""
              />
            </div>
            <div className="proj__projectContent">
              <section className="proj__wrapperOne">
                <div className="proj__featuredTitle">
                  <p className="proj__featuredDescription">Featured Project</p>
                </div>
              </section>
              <section className="proj__wrapperTwo">
                <h2 className="proj__title">{item.name}</h2>
                <div className="proj__descWrapper">
                  <p className="proj__description">{item.description}</p>
                </div>
                <div className="proj__btnWrapper">
                  <a className="proj__btnCode" href={item.github}>
                    <Icon
                      className="proj__btnCode-icon"
                      name="code"
                      width="15px"
                      height="15px"
                    />
                    View code
                  </a>
                  <a className="proj__btnDemo" href={item.demo}>
                    <Icon
                      className="proj__btnDemo-icon"
                      name="globe"
                      width="15px"
                      height="15px"
                    />
                    View Demo
                  </a>
                  <Link
                    className="proj__btnCaseStudy"
                    to={{
                      pathname: `projects/${item.name.toLowerCase()}/case-study`,
                      state: { projName: item.name },
                    }}
                  >
                    <Icon
                      className="proj__btnCaseStudy-icon"
                      name="casestudy"
                      width="15px"
                      height="15px"
                    />
                    Case Study
                  </Link>
                </div>
                <div className="proj__iconsWrapper">
                  <p className="proj__iconWrapperTitle">Powered By:</p>
                  <div className="proj__iconWrapper">
                    {item.icon.map((icons, index) => (
                      <Icon
                        className="proj__icon"
                        key={index}
                        name={icons}
                        width="20"
                        height="20"
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export { FeaturedProj };
