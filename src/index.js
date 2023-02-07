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

/**
 * Todo 정보를 생성
 * @param {string} content - Todo의 내용
 * @param {string} category - Todo의 카테고리
 * @return {string}  id
 */
const createTodo = () => {};

/**
 * Todo 정보 조회
 * @param {string=} id - Todo의 id
 * @returns {Todo | Todo[]}  Todo 또는 Todo 목록
 */
const readTodo = (id) => {};

/**
 * Todo 정보 수정
 * @param {string} id - Todo의 id
 * @return {string}  id
 */
const updateTodo = (id) => {};

/**
 * 선택한 Todo 삭제
 * @param {string} id - Todo의 id
 * @return {string}  id
 */
const deleteTodo = (id) => {};

/**
 * 전체 Todo 삭제
 * @return {void}
 */
const deleteAllTodo = () => {};

/**
 * 선택한 Todo의 태그 삭제
 * @param {string} id - Todo의 id
 * @param {string=} tagId - 삭제할 태그 id
 * @return {void}
 */
const deleteTag = (id, tagId) => {};
