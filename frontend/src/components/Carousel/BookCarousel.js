import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import RightPath from '../../assets/images/bt_right.png';
import LeftPath from '../../assets/images/bt_left.png';
import kakao from '../../assets/images/kakao.png';
import naver from '../../assets/images/naver.png';
import ridi from '../../assets/images/ridi.png';
import logo from '../../assets/images/logo.png';
// import { books as dummy } from '../../stores/books';
import { getBooksByPlatform, getBooksBySugeestion } from '../../api/API';
import $ from 'jquery';
import BookList from './BookList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ageRangeState, genderState, isLoginState } from '../../stores/atom';
import { useRecoilState } from 'recoil';

const BookCarousel = ({ name }) => {
  const [prev, setPrev] = useState(7);
  const [active, setActive] = useState(0);
  const [next, setNext] = useState(1);
  const [books, setBooks] = useState([]);
  const [Ids, setIds] = useState([]);
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState);
  const [gender, setGenderState] = useRecoilState(genderState);
  const [isLogin, setIsLoginState] = useRecoilState(isLoginState);
  const [mf, setMF] = useState(true);
  const [age, setAge] = useState(20);

  const navigate = useNavigate();
  // const Ids = [0, 1, 2, 3, 4, 5, 6, 7];
  const right = RightPath;
  const left = LeftPath;
  const moreName = name + 'more';
  const arrowName = name + 'arrow';

  const onPrev = () => {
    setNext(active);
    setActive(prev);
    setPrev(prev - 1 === -1 ? Ids.length - 1 : prev - 1);
  };
  const onNext = () => {
    setPrev(active);
    setActive(next);
    setNext(next + 1 === Ids.length ? 0 : next + 1);
  };

  const onIndicator = (id) => {
    console.log(id);
    setPrev(id - 1 === -1 ? Ids.length - 1 : id - 1);
    setActive(id);
    setNext(id + 1 === Ids.length ? 0 : id + 1);
  };

  const onMouseOver = () => {
    $('#' + arrowName).removeClass('translate-x-[-3rem]');
    $('#' + arrowName).removeClass('translate-x-[1rem]');
    $('#' + arrowName).width = $('#' + arrowName).width();
    $('#' + arrowName).addClass('translate-x-[1rem]');

    $('#' + moreName).removeClass('opacity-0');
    $('#' + moreName).removeClass('opacity-100');
    $('#' + moreName).width = $('#' + moreName).width();
    $('#' + moreName).addClass('opacity-100');
  };

  const onMouseOut = () => {
    $('#' + arrowName).removeClass('translate-x-[-3rem]');
    $('#' + arrowName).removeClass('translate-x-[1rem]');
    $('#' + arrowName).width = $('#' + arrowName).width();
    $('#' + arrowName).addClass('translate-x-[-3rem]');

    $('#' + moreName).removeClass('opacity-0');
    $('#' + moreName).removeClass('opacity-100');
    $('#' + moreName).width = $('#' + moreName).width();
    $('#' + moreName).addClass('opacity-0');
  };

  const onClickMore = (name) => {
    navigate('/tagsearch/' + name);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBooksByPlatform(name);
      if (name === '??????????????????') {
        setBooks(
          [...result.data.slice(0, 15)].concat(result.data.slice(0, 15)),
        );
        setPrev(5);
        setIds([0, 1, 2, 3, 4, 5]);
      } else if (name === '????????????') {
        if (isLogin) {
          if (ageRange === 1) {
            setAge(10);
          } else if (ageRange === 2) {
            setAge(20);
          } else if (ageRange === 3) {
            setAge(30);
          } else if (ageRange === 4) {
            setAge(40);
          }

          if (gender === true) {
            setMF('??????');
          } else {
            setMF('??????');
          }
          let recommendation = await getBooksBySugeestion(ageRange, !gender);
          setBooks(
            [...recommendation.data.slice(0, 10)].concat(
              recommendation.data.slice(0, 10),
            ),
          );
          setPrev(3);
          setIds([0, 1, 2, 3]);
        } else {
          let recommendation = await getBooksBySugeestion(1, false);
          setBooks(
            [...recommendation.data.slice(0, 10)].concat(
              recommendation.data.slice(0, 10),
            ),
          );
          setPrev(3);
          setIds([0, 1, 2, 3]);
          console.log(recommendation.data);
        }
      } else {
        setBooks(
          [...result.data.slice(0, 20)].concat(result.data.slice(0, 20)),
        );
        setIds([0, 1, 2, 3, 4, 5, 6, 7]);
      }
    };
    fetchData();
  }, [name]);
  return (
    <div className="w-[90rem] mx-auto flex items-center justify-center overflow-hidden">
      <img
        onClick={() => onPrev(active, next)}
        src={left}
        className="w-20 h-20 z-20 rounded-full cursor-pointer opacity-70 hover:opacity-100"
        alt=""
      ></img>
      <div className="relative w-[80rem] h-[500px] overflow-visible flex">
        <div className="w-full">
          <div className="flex items-end w-full pt-10">
            <div
              className="flex items-center w-full"
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <div className="text-2xl mr-4">
                {name === '??????????????????' ? (
                  <div className="flex">
                    <img className="w-8 mr-2" src={kakao} alt=""></img>
                    ?????????????????? ?????????
                  </div>
                ) : name === '??????????????????' ? (
                  <div className="flex">
                    <img className="w-8 mr-2" src={naver} alt=""></img>
                    ?????????????????? ?????????
                  </div>
                ) : name === '????????????' ? (
                  <div className="flex">
                    <img className="w-8 mr-2" src={ridi} alt=""></img>
                    ???????????? ?????????
                  </div>
                ) : name === '????????????' ? (
                  isLogin ? (
                    <div className="flex">
                      <img
                        className="w-8 mr-2 rounded-lg"
                        src={logo}
                        alt=""
                      ></img>
                      {age}??? {mf} ???????????? ?????? ???????????? ????????????!
                    </div>
                  ) : (
                    <div className="flex">
                      <img
                        className="w-8 mr-2 rounded-lg"
                        src={logo}
                        alt=""
                      ></img>
                      ????????? ?????? ?????? ??????!
                    </div>
                  )
                ) : (
                  ''
                )}
              </div>
              <div
                id={moreName}
                className="text-lg opacity-0 duration-200 delay-200 text-gray-500 cursor-pointer"
                onClick={() => onClickMore(name)}
              >
                ?????????
              </div>
              <div
                id={arrowName}
                onClick={() => onClickMore(name)}
                className="text-sm duration-500 translate-x-[-3rem] cursor-pointer"
              >
                {'>'}
              </div>
            </div>
            <div
              className="flex space-x-1 absolute right-0"
              style={{ paddingBottom: '4px' }}
            >
              {Ids.map((id) => {
                if (id < Ids.length / 2) {
                  return (
                    <div
                      id={id}
                      className={`h-1 w-4 bg-primary-2
          ${
            active > id
              ? active % (Ids.length / 2) === id
                ? 'bg-primary-3'
                : ''
              : active === id
              ? 'bg-primary-3'
              : ''
          }`}
                      onClick={() => onIndicator(id)}
                    ></div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          {Ids.map((id) => (
            <div
              id={id}
              className={`absolute w-[100%] h-[65%] inset-2/4 translate-x-[-50%] translate-y-[-50%] ease-in-out duration-700 overflow-visible
          ${
            prev === id
              ? 'translate-x-[-150%] opacity-0'
              : next === id
              ? 'translate-x-[50%] opacity-0'
              : active === id
              ? 'translate-x-[-50%]'
              : 'translate-x-[50%] opacity-0'
          }
          `}
            >
              <BookList number={id} books={books}></BookList>
            </div>
          ))}
        </div>
      </div>
      <img
        onClick={onNext}
        src={right}
        className="w-20 h-20 z-20 rounded-full cursor-pointer opacity-70 hover:opacity-100"
        alt=""
      ></img>
    </div>
  );
};

export default BookCarousel;
