import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const CreateStudy = lazy(() => import('../pages/CreateStudy'));
const StudyInfo = lazy(() => import('../pages/StudyInfo'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Points = lazy(() => import('../pages/Points'));
const Study = lazy(() => import('../pages/Study'));
const EditStudy = lazy(() => import('../pages/EditStudy'));
const Group = lazy(() => import('../pages/Group'));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={''}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/create-study" element={<CreateStudy />} />
        <Route path="/study-info/:studyId" element={<StudyInfo />} />
        <Route path="/points" element={<Points />} />
        <Route path="/study" element={<Study />} />
        <Route path="/edit-study/:studyId" element={<EditStudy />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
