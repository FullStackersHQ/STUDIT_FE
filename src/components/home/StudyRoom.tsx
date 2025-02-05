import { useInfiniteQuery } from "@tanstack/react-query";
import client from "../../utils/client";
import StudyRoomList from "./StudyRoomList";
import { useEffect, useRef } from "react";


const fetchStudies = async (pageParam = 1) => {
	const { data } = await client.get(`/api/study-room?page=${pageParam}`);
	return data.result.study_rooms;
};

export default function StudyRoom(): JSX.Element {
		const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
			queryKey: ['study-rooms'],
			queryFn: ({ pageParam = 1 }) => fetchStudies(pageParam),
			initialPageParam: 1,
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.hasMore ? allPages.length + 1 : undefined;
			},
		});
	const observerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 1.0 },
		);
		if (observerRef.current) {
			observer.observe(observerRef.current);
		}
		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [fetchNextPage, hasNextPage, isFetchingNextPage]);

	return (
		<div className="w-full h-[400px] mt-3 flex flex-col items-center gap-[5px] overflow-y-scroll scrollbar-hide">
		{data?.pages
			.flatMap((page) => page)
			.map((study) => (
				<StudyRoomList key={study.recruitId} study={study}/>
			))}
		<div ref={observerRef} className="h-10" />
	</div>
	)
}