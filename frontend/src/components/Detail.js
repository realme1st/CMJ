import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import './Detail.css';
import {
  getBook,
  getBooksByTag,
  signIn,
  fixSignIn,
  deleteSignIn,
  userLikeBook,
  userLikeTag,
  searchUserById,
  searchMe,
  searchUserByUserNo,
  exceptUserLikeBook,
  exceptUserLiketag,
} from '../api/API2';

const Detail = () => {
  const onClick = async () => {
    // ageGroup: 1  gender: false  id: "2" nickname:
    // "www"  userNo: 2 password: "1234"
    // let result1 = await getBook(1);
    // console.log(result1.data);
    // let result2 = await getBooksByTag([1, 2, 3]);
    // console.log(result2.data);
    // 됨 1 2 3 8 10
    // 이름만됨 4
    // 나머지 아직모름
    // let result3 = await signIn(10, false, '2', 'jmj', '1234');
    // console.log(result3.data);
    // let result4 = await fixSignIn(20, true, '2', 'www', '1234');
    // console.log(result4.data);
    // let result5 = await deleteSignIn(10, false, '2', 'www', '1234');
    // console.log(result5.data);
    // let result6 = await userLikeBook(10, 0, '2', 'jmj', '1234');
    // console.log(result6.data);
    // let result7 = await userLikeTag(10, 0, '2', 'jmj', '1234');
    // console.log(result7.data);
    let result8 = await searchUserById('2');
    console.log(result8.data);
    // let result9 = await searchMe();
    // console.log(result9.data);
    // let result10 = await searchUserByUserNo(3);
    // console.log(result10.data);
    // let result11 = await exceptUserLikeBook(10, 3);
    // console.log(result11.data);
    // let result12 = await exceptUserLiketag(10, 3);
    // console.log(result12.data);
  };

  const tags = [
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
  ];

  return (
    <>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[80rem] lg:space-y-16">
          <section className="w-full max-w-[80rem]  border-2 border-red-600">
            <div className="grid grid-cols-12 gap-4   ">
              <main className="col-span-8   border-2 border-green-600">
                {/* <div
                  className="tx-popover-panel"
                  id="headlessui-popover-panel-:ru:"
                  tabindex="-1"
                  style={{
                    top: '72px',
                    left: '-359.344px',
                  }}
                > */}
                <div className="tx-popover-content">
                  <div className="flex items-center justify-between"></div>

                  <div className="flex gap-x-4">
                    <div className="flex-col ">
                      <img
                        onClick={onClick}
                        alt="나 빼고 다 젊은이"
                        srcset="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640 2x"
                        src="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640"
                        decoding="async"
                        data-nimg="raw"
                        className=" rounded  block w-[55vw]"
                      ></img>
                      <button
                        type="button"
                        class="mt-[0.5vw] w-[100%] h-[3vw] text-[32px] px-[32.5%] inline-flex  text-center items-center  py-2  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-primary-2 rounded-md shadow cursor-not-allowed hover:bg-primary-1"
                        disabled=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        좋아요
                      </button>
                    </div>
                    <div className="  space-y-4">
                      <p style={{ fontSize: '2vw' }}>제목</p>
                      <p style={{ fontSize: '2vw' }}>저자</p>
                      <p style={{ fontSize: '2vw' }}>연재처</p>
                      <p style={{ fontSize: '2vw' }}>내용소개</p>
                      <p style={{ fontSize: '2vw' }}>현재 편수 / 완결 여부</p>
                      <p style={{ fontSize: '2vw' }}>링크는 밑에 버튼으로</p>
                      <hr className="border-2 border-primary-2 bg-primary-2  "></hr>
                      <p>
                        지극히 평범한(?) 할아버지 최춘택. 손녀를 지키기 위해
                        가상현실 게임 ‘아크스타’ 를 시작했다. 그런데 우연히
                        전설의 직업을 얻어버렸다…? “염병하네.”
                      </p>
                      <div className="inline">
                        {tags.slice(0, 4).map((tag, index) => (
                          <span
                            id={index}
                            target="_self"
                            className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </main>
              <aside className="col-span-4    border-2 border-blue-600">
                <p>댓글 관련 그 어떤것? 통계 면 이상형월드컵이랑 비슷?</p>
              </aside>
            </div>
          </section>

          <div className="w-full h-full mt-8">
            <div className="text-[30px] mb-4">관련추천 10개만!!!</div>

            <div className="w-full ">
              <div className="flex w-full h-[30.1rem] justify-between flex-wrap my-4">
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
                  <div className="inline">
                    {tags.slice(0, 5).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/*   tagSearch  가져온거   
    <div className="flex w-full h-[30.1rem] justify-between my-4">
      {books.map((book) => (
        <div className="w-[18%] h-[100%] overflow-hidden">
          <img
            src={book.src}
            alt=""
            className="w-full h-[66%] rounded-xl"
          ></img>
          <div className="text-lg w-[5rem] bookName my-2">{book.name}</div>
          <div className="inline">
            {tags.slice(0, 5).map((tag, index) => (
              <span
                id={index}
                target="_self"
                className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Detail;
