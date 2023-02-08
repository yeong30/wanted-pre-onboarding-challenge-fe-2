/**
 * Todo 정보를 담고있는 객체
 * @constructor
 * @property {string} id -Todo의 Id
 * @property {string} content - Todo의 내용
 * @property {boolean} isCompleted - Todo 완료 여부
 * @property {string} category - Todo의 카테고리
 * @property {string[]} tags - Todo의 태그
 *
 */
class Todo {}
interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
  category: string;
  tags: string[];
}
/**
 * Todo 정보를 생성
 * @param {string} content - Todo의 내용
 * @param {string} category - Todo의 카테고리
 * @return {string}  id
 */
type createTodo = () => void;

/**
 * Todo 정보 조회
 * @param {string=} id - Todo의 id
 * @returns {Todo | Todo[]}  Todo 또는 Todo 목록
 */
type readTodo = (id: string) => Todo | Todo[];

/**
 * Todo 정보 수정
 * @param {string} id - Todo의 id
 * @return {string}  id
 */
type updateTodo = (id: string) => string;

/**
 * 선택한 Todo 삭제
 * @param {string} id - Todo의 id
 * @return {string}  id
 */
type deleteTodo = (id: string) => string;

/**
 * 전체 Todo 삭제
 * @return {void}
 */
type deleteAllTodo = () => void;

/**
 * 선택한 Todo의 태그를 삭제한다.
 * @param {string} id - Todo의 id
 * @param {string=} tagId - 삭제할 태그 id
 * @return {void}
 */
type deleteTag = (id: string, tagId?: string) => void;
