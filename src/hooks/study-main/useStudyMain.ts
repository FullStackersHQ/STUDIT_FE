import { useParams } from 'react-router-dom';
import useGetStudyDetail from './useGetStudyDetail';
import MenuIcon from '../../assets/icons/hamburger-menu.svg';
import { useState } from 'react';

export default function useStudyMain() {
  const params = useParams();
  const studyId = Number(params.studyId);
  const { studyDetail, isDetailLoading } = useGetStudyDetail(studyId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const userId = 1;
  const action = { icon: MenuIcon, onClick: toggleMenu, ariaLabel: '스터디 메뉴 보기' };

  return { studyDetail, isDetailLoading, studyId, action, isMenuOpen, userId, toggleMenu };
}
