export default {
  name: 'km', //name should be kh (from the word 'Khmer') instead of km
  el: {
    colorpicker: {
      confirm: 'យល់ព្រម',
      clear: 'លុប',
    },
    datepicker: {
      now: 'ឥឡូវនេះ',
      today: 'ថ្ងៃនេះ',
      cancel: 'បោះបង់',
      clear: 'លុប',
      confirm: 'យល់ព្រម',
      selectDate: 'ជ្រើសរើសថ្ងៃ',
      selectTime: 'ជ្រើសរើសម៉ោង',
      startDate: 'ថ្ងៃចាប់ផ្តើម',
      startTime: 'ម៉ោងចាប់ផ្តើម',
      endDate: 'ថ្ងៃបញ្ចប់',
      endTime: 'ម៉ោងបញ្ចប់',
      prevYear: 'ឆ្នាំមុន',
      nextYear: 'ឆ្នាំក្រោយ',
      prevMonth: 'ខែមុន',
      nextMonth: 'ខែក្រោយ',
      year: 'ឆ្នាំ',
      month1: 'មករា',
      month2: 'កុម្ភៈ',
      month3: 'មីនា',
      month4: 'មេសា',
      month5: 'ឧសភា',
      month6: 'មិថុនា',
      month7: 'កក្កដា',
      month8: 'សីហា',
      month9: 'កញ្ញា',
      month10: 'តុលា',
      month11: 'វិច្ឆិកា', //fix spelling error
      month12: 'ធ្នូ',
      // week: 'week',
      weeks: {
        sun: 'អាទិត្យ',
        mon: 'ចន្ទ', //From official Khmer dictionary
        tue: 'អង្គារ',
        wed: 'ពុធ',
        thu: 'ព្រ.ហ', //Full text is ព្រហស្បតិ៍ => abbre. ព្រហ or ព្រ.ហ
        fri: 'សុក្រ',
        sat: 'សៅរ៍', //fix spelling error
      },
      months: {
        jan: 'មករា',
        feb: 'កុម្ភៈ',
        mar: 'មីនា',
        apr: 'មេសា',
        may: 'ឧសភា',
        jun: 'មិថុនា',
        jul: 'កក្កដា',
        aug: 'សីហា',
        sep: 'កញ្ញា',
        oct: 'តុលា',
        nov: 'វិច្ឆិកា', //fix spelling error
        dec: 'ធ្នូ',
      },
    },
    select: {
      loading: 'កំពុងផ្ទុក',
      noMatch: 'គ្មានទិន្នន័យដូច', //fix spelling error
      noData: 'គ្មានទិន្នន័យ', //fix spelling error
      placeholder: 'ជ្រើសរើស',
    },
    cascader: {
      noMatch: 'គ្មានទិន្នន័យដូច', //fix spelling error
      loading: 'កំពុងផ្ទុក',
      placeholder: 'ជ្រើសរើស',
      noData: 'គ្មានទិន្នន័យ', //fix spelling error
    },
    pagination: {
      goto: 'ទៅកាន់',
      pagesize: '/ទំព័រ',
      total: 'សរុប {total}',
      pageClassifier: '',
    },
    messagebox: {
      title: 'សារ',
      confirm: 'យល់ព្រម',
      cancel: 'បោះបង់',
      error: 'ការបញ្ចូលមិនត្រឹមត្រូវ',
    },
    upload: {
      deleteTip: 'ចុចលុបដើម្បីដកចេញ',
      delete: 'លុប',
      preview: 'មើល',
      continue: 'បន្ត',
    },
    table: {
      emptyText: 'គ្មានទិន្នន័យ',
      confirmFilter: 'យល់ព្រម',
      resetFilter: 'កំណត់ឡើងវិញ',
      clearFilter: 'ទាំងអស់',
      sumText: 'បូក',
    },
    tree: {
      emptyText: 'គ្មានទិន្នន័យ',
    },
    transfer: {
      noMatch: 'គ្មានទិន្នន័យដូច',
      noData: 'គ្មានទិន្នន័យ',
      titles: ['បញ្ជី ១', 'បញ្ជី ២'],
      filterPlaceholder: 'បញ្ចូលពាក្យ',
      noCheckedFormat: '{total} ធាតុ',
      hasCheckedFormat: '{checked}/{total} បានគូសធីក',
    },
    image: {
      error: 'FAILED', // to be translated
    },
    pageHeader: {
      title: 'ត្រលប់ក្រោយ', // title means ចំណងជើង, BACK means ត្រលប់ក្រោយ
    },
    popconfirm: {
      confirmButtonText: 'ព្រម', // to be translated
      cancelButtonText: 'មិនព្រម', // to be translated
    },
  },
}
