import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';
import LoginRedirect from '../pages/LoginRedirect';

const Login = lazy(() => import('../pages/Login'));
const CreateStudy = lazy(() => import('../pages/CreateStudy'));
const RecruitDetail = lazy(() => import('../pages/RecruitDetail'));
const EditRecruit = lazy(() => import('../pages/EditRecruit'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Point = lazy(() => import('../pages/Point'));
const StudyDetail = lazy(() => import('../pages/StudyDetail'));
const EditStudy = lazy(() => import('../pages/EditStudy'));
const StudyList = lazy(() => import('../pages/StudyList'));
const Search = lazy(() => import('../pages/Search'));
const MyStudyList = lazy(() => import('../pages/MyStudyList'));
const RecruitList = lazy(() => import('../pages/RecruitList'));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={''}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/oauth2/callback/kakao" element={<LoginRedirect />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/point" element={<Point />} />
          <Route path="/search" element={<Search />} />

          <Route path="/create-study" element={<CreateStudy />} />

          <Route path="/" element={<Navigate to="/recruit-list" replace />} />
          <Route path="/recruit-list" element={<RecruitList />} />
          <Route path="/recruit/:recruitId" element={<RecruitDetail />} />
          <Route path="/edit-recruit/:recruitId" element={<EditRecruit />} />

          <Route path="/study-list" element={<StudyList />} />
          <Route path="/study/:studyId" element={<StudyDetail />} />
          <Route path="/edit-study/:studyId" element={<EditStudy />} />

          <Route path="/my-study" element={<MyStudyList />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
