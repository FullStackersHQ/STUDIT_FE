/**
  스터디룸 생성, post, /api/study-room
	{
	"status": "OK",
	"code": 200,
	"message": "스터디룸이 생성되었습니다.",
	"result": {
		"study_id": 101
		}
	}

	특정 스터디룸 상세 조회, get, /api/study-room/{study_id}
	{
		"status": "OK",
		"code": 200,
		"message": "스터디룸의 상세 정보가 조회 되었습니다.",
		"result": {
			"study_id": 101,
			"study_name": "코딩 마스터 스터디",
			"study_description": "알고리즘 및 코딩 테스트 대비 스터디",
			"tags": "코딩, 알고리즘",
			"category": "코딩",
			"study_notice": "매주 수요일 8시 스터디 진행",
			"end_date": "2025-12-31",
			"goal_time": 10,
			"goal_cycle": "WEEKLY",
			"penalty_point": 10,
			"entry_point": 50,
			"max_members": 10,
			"current_members": 5,
			"use_yn": "Y"
		}
	}

	스터디룸 수정, put, /api/study-room/{study_id}
	{
	"status": "OK",
	"code": 200,
	"message": "스터디룸 정보가 수정되었습니다.",
	"result": {
		"study_id": 101
		}
	}

	스터디룸 삭제, delete, /api/study-room/{study_id}
	{
	"status": "OK",
	"code": 200,
	"message": "스터디룸이 삭제되었습니다."
	}

 */

import { http, HttpResponse } from 'msw';
import { mockStudyRoomList } from './data/dummy';

export const studyRoomHandlers = [
  // 스터디룸 목록 조회
  http.get(`/api/study-room`, async () => {
    console.log('스터디 목록 조회');
    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디 목록이 조회 되었습니다.',
      result: {
        study_rooms: mockStudyRoomList,
      },
    });
  }),
];
