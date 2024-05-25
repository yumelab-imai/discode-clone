import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";

// useDispatchとuseSelectorのhooks（型定義）をこのファイルで定義（作成）

// React Hooksのフック（hook） とは？
// クラスを使用せずに Reactを書くことができる機能
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
