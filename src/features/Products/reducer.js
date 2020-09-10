import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  SET_PAGE,
  SET_CATEGORY,
  SET_KEYWORD,
  SET_TAGS,
  NEXT_PAGE,
  PREV_PAGE,
  TOGGLE_TAG
} from './constants'

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const initialState = {
  data: [], //untuk menyimpan item / produk dari server
  currentPage: 1, //untuk menyimpan halaman aktif, default 1
  totalItems: -1, //total item/produk
  perPage: 6, // jumlah item untuk menyimpan halaman
  keyword: '', // untuk memfilter berdasarkan nama produk
  category: '', // kategori produk yang sedang aktif
  tags: [], // tags produk yang sedang aktif
  status: statuslist.idle //status request data produk ke server
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PRODUCT:
      return { ...state, status: statuslist.process }
    case ERROR_FETCHING_PRODUCT:
      return { ...state, status: statuslist.error }
    case SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count
      }
    case SET_PAGE:
      return { ...state, currentPage: action.currentPage }
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 }
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      }

    case SET_KEYWORD:
      return { ...state, keyword: action.keyword, tag: [], category: '' }
    case SET_CATEGORY:
      return { ...state, category: action.category, keyword: '', tag: [] }
    case SET_TAGS:
      return {
        ...state,
        tags: action.tags
      }
    case TOGGLE_TAG:
      if (!state.tags.includes(action.tag)) {
        return { ...state, currentPage: 1, tags: [...state.tags, action.tag] }
      } else {
        return {
          ...state,
          currentPage: 1,
          tags: state.tags.filter((tag) => tag !== action.tags)
        }
      }

    default:
      return state
  }
}

export default reducer
