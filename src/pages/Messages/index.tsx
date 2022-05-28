import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
type Props = {};

export default function Messages({}: Props) {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;

  return (
    <div>
      Messages
      {id}
    </div>
  );
}
