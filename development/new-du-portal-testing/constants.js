// Variables
const monthYear = 'MJ2018';
const stdType = 'REG';
const examFlag = 'PG_SEMESTER_2Y';
const courseCode = '823';
const courseName = '(P.G)-%20MASTER%20OF%20COMPUTER%20APPLICATION%20(M.C.A.)';
const part = 'I';
const sem = 'II';
// const collegeCode = '234';
const collegeCode = '015'

// URLs
// const fetchStudentOption = `StdType=${stdType}&ExamFlag=${examFlag}&CourseCode=${courseCode}&CourseName=${courseName}&Part=${part}&Sem=${sem}`;
// const studentURL = `http://duexam.du.ac.in/RSLT_${monthYear}/Students/List_Of_Students.aspx?${fetchStudentOption}`;
const resultURL = `http://duresult.in/students/Combine_GradeCard.aspx`;

module.exports = {
  resultURL,
//   studentURL,
  collegeCode,
  searchButtonValue: 'Print+Score+Card',
  viewState:
    'wEPDwUJOTc3OTgxMzM3DxYEHgdjYXB0Y2hhBQY4NjQ3ODUeCUlwQWRkcmVzcwUNMTAzLjc4LjE0OC4xMBYCAgMPZBYMAgEPZBYCAgUPDxYCHgRUZXh0BTNSZXN1bHRzIChTZW1lc3Rlci9Bbm51YWwgRXhhbWluYXRpb24gTm92LURlYyAyMDE4IClkZAIHDw8WAh8CBQ8gKE5vdi1EZWMgMjAxOClkZAIVDxAPFgYeDURhdGFUZXh0RmllbGQFCUNPTExfTkFNRR4ORGF0YVZhbHVlRmllbGQFCUNPTExfQ09ERR4LXyFEYXRhQm91bmRnZBAVfhI8LS0tLS1TZWxlY3QtLS0tLT4cQWNoYXJ5YSBOYXJlbmRyYSBEZXYgQ29sbGVnZSRBZGl0aSBNYWhhdmlkaGxheWEgKFRlYWNoaW5nIENlbnRyZSkTQWRpdGkgTWFoYXZpZHlhbGF5YSVBcnlhYmhhdHRhIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkgPUFyeWFiaGF0dGEgQ29sbGVnZSBbRm9ybWVybHkgUmFtIExhbCBBbmFuZCBDb2xsZWdlIChFdmVuaW5nKV0fQXRtYSBSYW0gU2FuYXRhbiBEaGFyYW0gQ29sbGVnZRhCaGFnaW5pIE5pdmVkaXRhIENvbGxlZ2UqQmhhZ2luaSBOaXZlZGl0YSBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpD0JoYXJhdGkgQ29sbGVnZSFCaGFyYXRpIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUqQmhhc2thcmFjaGFyeWEgQ29sbGVnZSBvZiBBcHBsaWVkIFNjaWVuY2VzEUNBTVBVUyBMQVcgQ0VOVFJFF0NhbXB1cyBvZiBPcGVuIExlYXJuaW5nIkNsdXN0ZXIgSW5ub3ZhdGlvbiBDZW50cmUgKEMuSS5DLikdQ29sbGVnZSBPZiBWb2NhdGlvbmFsIFN0dWRpZXMvQ29sbGVnZSBvZiBWb2NhdGlvbmFsIFN0dWRpZXMgKFRlYWNoaW5nIENlbnRyZSkSRGF1bGF0IFJhbSBDb2xsZWdlHERlZW4gRGF5YWwgVXBhZGh5YXlhIENvbGxlZ2UuRGVlbiBEYXlhbCBVcGFkaHlheWEgQ29sbGVnZSAoVGVhY2hpbmcgQ2VudHJlKSBEZWxoaSBDb2xsZWdlIE9mIEFydHMgJiBDb21tZXJjZRpEZWxoaSBTY2hvb2wgb2YgSm91cm5hbGlzbWREZXBhcnRtZW50IG9mIEJvdGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZERlcGFydG1lbnQgb2YgQ2hlbWlzdHJ5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAWRGVwYXJ0bWVudCBvZiBDb21tZXJjZWREZXBhcnRtZW50IG9mIENvbXB1dGVyIFNjaWVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydG1lbnQgb2YgRWR1Y2F0aW9uIChDLkkuRS4pFURlcGFydG1lbnQgb2YgRW5nbGlzaBdEZXBhcnRtZW50IG9mIEdlb2dyYXBoeSpEZXBhcnRtZW50IG9mIEdlcm1hbmljIGFuZCBSb21hbmNlIFN0dWRpZXMTRGVwYXJ0bWVudCBvZiBIaW5kaRVEZXBhcnRtZW50IG9mIEhpc3RvcnktRGVwYXJ0bWVudCBvZiBMaWJyYXJ5IGFuZCBJbmZvcm1hdGlvbiBTY2llbmNlZERlcGFydG1lbnQgb2YgTWF0aGVtYXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICATRGVwYXJ0bWVudCBvZiBNdXNpY2REZXBhcnRtZW50IG9mIFBoeXNpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgH0RlcGFydG1lbnQgb2YgUG9saXRpY2FsIFNjaWVuY2UWRGVwYXJ0bWVudCBvZiBTYW5za3JpdGREZXBhcnRtZW50IG9mIFNvY2lhbCBXb3JrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZERlcGFydG1lbnQgb2YgU3RhdGlzdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkRGVwYXJ0bWVudCBvZiBab29sb2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIBhEZXNoYmFuZGh1IENvbGxlZ2UgKERheSkrRHIuIEFtYmVka2FyIENlbnRlciBmb3IgQmlvbWVkaWNhbCBSZXNlYXJjaCNEci4gQi5SLiBBbWJlZGthciAoVGVhY2hpbmcgQ2VudHJlKR1Eci4gQmhpbSBSYW8gQW1iZWRrYXIgQ29sbGVnZS5EdXJnYWJhaSBEZXNobXVraCBDb2xsZWdlIG9mIFNwZWNpYWwgRWR1Y2F0aW9uGER5YWwgU2luZ2ggQ29sbGVnZSAoRGF5KRhEeWFsIFNpbmdoIENvbGxlZ2UgKEV2ZSkdRmFjdWx0eSBvZiBNYW5hZ2VtZW50IFN0dWRpZXMNR2FyZ2kgQ29sbGVnZRBIYW5zIFJhaiBDb2xsZWdlIkhhbnMgUmFqIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUNSGluZHUgQ29sbGVnZRVJLlAuQ29sbGVnZSBGb3IgV29tZW42SW5kaXJhIEdhbmRoaSBJbnN0aXR1dGUgb2YgUGh5LiBFZHUuICYgU3BvcnRzIFNjaWVuY2VzLkluc3RpdHV0ZSBvZiBDeWJlciBTZWN1cml0eSBhbmQgTGF3IChJLkMuUy5MLikbSW5zdGl0dXRlIE9mIEhvbWUgRWNvbm9taWNzG0phbmtpIERldmkgTWVtb3JpYWwgQ29sbGVnZS1KYW5raSBEZXZpIE1lbW9yaWFsIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUUSmVzdXMgJiBNYXJ5IENvbGxlZ2UmSmVzdXMgJiBNYXJ5IENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUMSnViaWxlZSBIYWxsD0thbGluZGkgQ29sbGVnZSFLYWxpbmRpIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUTS2FtbGEgTmVocnUgQ29sbGVnZSRLZXNoYXYgTWFoYXZpZGxheWEgKFRlYWNoaW5nIENlbnRyZSkUS2VzaGF2IE1haGF2aWR5YWxheWESS2lyb3JpIE1hbCBDb2xsZWdlEkxhZHkgSXJ3aW4gQ29sbGVnZR5MYWR5IFNyaSBSYW0gQ29sbGVnZSBGb3IgV29tZW4STGFrc2htaWJhaSBDb2xsZWdlJExha3NobWliYWkgQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZQxMQVcgQ0VOVFJFLUkNTEFXIENFTlRSRS1JSRhNYWhhcmFqYSBBZ3Jhc2VuIENvbGxlZ2UqTWFoYXJhamEgQWdyYXNlbiBDb2xsZWdlIC0gVGVhY2hpbmcgQ2VudHJlJU1haGFyc2hpIFZhbG1pa2kgQ29sbGVnZSBvZiBFZHVjYXRpb24QTWFpdHJleWkgQ29sbGVnZSJNYWl0cmV5aSBDb2xsZWdlIC0gVGVhY2hpbmcgQ2VudHJlHU1hdGEgU3VuZHJpIENvbGxlZ2UgRm9yIFdvbWVuL01hdGEgU3VuZHJpIENvbGxlZ2UgRm9yIFdvbWVuIC0gVGVhY2hpbmcgQ2VudHJlDU1pcmFuZGEgSG91c2UfTWlyYW5kYSBIb3VzZSAoVGVhY2hpbmcgQ2VudHJlKRxNb3RpIExhbCBOZWhydSBDb2xsZWdlIChEYXkpHE1vdGkgTGFsIE5laHJ1IENvbGxlZ2UgKEV2ZSkoTW90aSBMYWwgTmVocnUgQ29sbGVnZSAoVGVhY2hpbmcgQ2VudHJlKSxOb24gQ29sbGVnaWF0ZSBXb21lbiBFZHVjYXRpb24gQm9hcmQgKE5DV0VCKRhQLkcuRC5BLlYuIENvbGxlZ2UgKERheSkYUC5HLkQuQS5WLiBDb2xsZWdlIChFdmUpJFAuRy5ELkEuVi4gQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZRBSYWpkaGFuaSBDb2xsZWdlIlJhamRoYW5pIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkbUmFtIExhbCBBbmFuZCBDb2xsZWdlIChEYXkpEVJhbWFudWphbiBDb2xsZWdlI1JhbWFudWphbiBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpDlJhbWphcyBDb2xsZWdlF1MuRy5ULkIuIEtoYWxzYSBDb2xsZWdlF1NhdHlhd2F0aSBDb2xsZWdlIChEYXkpF1NhdHlhd2F0aSBDb2xsZWdlIChFdmUpJFNhdHlhd2F0aSBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpIBdTY2hvb2wgb2YgT3BlbiBMZWFybmluZyJTaGFoZWVkIEJoYWdhdCBTaW5naCBDb2xsZWdlIChEYXkpIlNoYWhlZWQgQmhhZ2F0IFNpbmdoIENvbGxlZ2UgKEV2ZSk1U2hhaGVlZCBSYWpndXJ1IENvbGxlZ2Ugb2YgQXBwbGllZCBTY2llbmNlcyBmb3IgV29tZW4rU2hhaGVlZCBTdWtoZGV2IENvbGxlZ2Ugb2YgQnVzaW5lc3MgU3R1ZGllcw9TaGl2YWppIENvbGxlZ2UXU2h5YW0gTGFsIENvbGxlZ2UgKERheSkXU2h5YW0gTGFsIENvbGxlZ2UgKEV2ZSkxU2h5YW1hIFByYXNhZCBNdWtoZXJqZWUgQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZShTaHlhbWEgUHJhc2FkIE11a2hlcmppIENvbGxlZ2UgZm9yIFdvbWVuFlNPTCBTdHVkeSBDZW50ZXIgU291dGgbU3JpIEF1cm9iaW5kbyBDb2xsZWdlIChEYXkpG1NyaSBBdXJvYmluZG8gQ29sbGVnZSAoRXZlKSdTcmkgQXVyb2JpbmRvIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkpU3JpIEd1cnUgR29iaW5kIFNpbmdoIENvbGxlZ2UgT2YgQ29tbWVyY2U7U3JpIEd1cnUgR29iaW5kIFNpbmdoIENvbGxlZ2UgT2YgQ29tbWVyY2UgLSBUZWFjaGluZyBDZW50cmUhU3JpIEd1cnUgTmFuYWsgRGV2IEtoYWxzYSBDb2xsZWdlG1NyaSBSYW0gQ29sbGVnZSBPZiBDb21tZXJjZRhTcmkgVmVua2F0ZXN3YXJhIENvbGxlZ2UUU3QuIFN0ZXBoZW5zIENvbGxlZ2UaU3dhbWkgU2hyYWRkaGFuYW5kIENvbGxlZ2UTVW5pdmVyc2l0eSBvZiBEZWxoaRNWaXZla2FuYW5kYSBDb2xsZWdlJVZpdmVrYW5hbmRhIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUaWmFraXIgSHVzYWluIENvbGxlZ2UgKEV2ZSkgWmFraXIgSHVzYWluIERlbGhpIENvbGxlZ2UgKERheSkVfhI8LS0tLS1TZWxlY3QtLS0tLT4DMDAxBDEzMTQDMDAyBDEzMTUDMDU5AzAwMwMwMDcEMTMxNwMwMDgEMTMwNwMwMDkDMzA5A0NPTAMzMTIDMDEzBDEzMTgDMDE0AzAxNQQxMzI2AzAxNgMzMTYDMjE2AzIxNwMyNDEDMjM0AzI0MwMyMDMDMjI5AzIwNAMyMDUDMjMxAzIwNgMyMzUDMjQwAzIyMgMyMzIDMjEzAzIzMwMyMzcDMjIzAzAxOQMzMTgEMTMxNgMwMTADMzE0AzAyMQMwMjIDMTA5AzAyNAMwMjUEMTMxMwMwMjYDMDI5AzAyOAMzMTcDMDMwAzAzMQQxMzA0AzAzMgQxMzA4AzMwNgMwMzMEMTMwNQMwMzQEMTMxOQMwMzUDMDM2AzAzOAMwMzkDMDQwBDEzMTADMzEwAzMxMQMwNDEEMTMwMgMzMTUDMDQzBDEzMDkDMDQ0BDEzMDMDMDQ3BDEzMjADMDQ4AzA0OQQxMzIxAzMwNwMwNTMDMDU0BDEzMTEDMDU1BDEzMjIDMDU4AzAyMAQxMzIzAzA1NgMwNjgDMDYyAzA2MwQxMzI0A1NPTAMwNjQDMDY1AzA2NgMwNjcDMDcxAzA3MwMwNzQEMTMwNgMwNzUEU09MUwMwNzYDMDc3BDEzMjUDMDc4BDEzMTIDMDY5AzA3MgMwNzkDMDgwAzA4MQMxMDADMDg0BDEzMDEDMDg2AzA4NRQrA35nZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dkZAIdD2QWAmYPZBYCAgMPDxYCHghJbWFnZVVybAVDR2VuZXJhdGVDYXB0Y2hhLmFzcHg',
  eventValidation:
    'wEPDwUJOTc3OTgxMzM3DxYEHgdjYXB0Y2hhBQY4NjQ3ODUeCUlwQWRkcmVzcwUNMTAzLjc4LjE0OC4xMBYCAgMPZBYMAgEPZBYCAgUPDxYCHgRUZXh0BTNSZXN1bHRzIChTZW1lc3Rlci9Bbm51YWwgRXhhbWluYXRpb24gTm92LURlYyAyMDE4IClkZAIHDw8WAh8CBQ8gKE5vdi1EZWMgMjAxOClkZAIVDxAPFgYeDURhdGFUZXh0RmllbGQFCUNPTExfTkFNRR4ORGF0YVZhbHVlRmllbGQFCUNPTExfQ09ERR4LXyFEYXRhQm91bmRnZBAVfhI8LS0tLS1TZWxlY3QtLS0tLT4cQWNoYXJ5YSBOYXJlbmRyYSBEZXYgQ29sbGVnZSRBZGl0aSBNYWhhdmlkaGxheWEgKFRlYWNoaW5nIENlbnRyZSkTQWRpdGkgTWFoYXZpZHlhbGF5YSVBcnlhYmhhdHRhIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkgPUFyeWFiaGF0dGEgQ29sbGVnZSBbRm9ybWVybHkgUmFtIExhbCBBbmFuZCBDb2xsZWdlIChFdmVuaW5nKV0fQXRtYSBSYW0gU2FuYXRhbiBEaGFyYW0gQ29sbGVnZRhCaGFnaW5pIE5pdmVkaXRhIENvbGxlZ2UqQmhhZ2luaSBOaXZlZGl0YSBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpD0JoYXJhdGkgQ29sbGVnZSFCaGFyYXRpIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUqQmhhc2thcmFjaGFyeWEgQ29sbGVnZSBvZiBBcHBsaWVkIFNjaWVuY2VzEUNBTVBVUyBMQVcgQ0VOVFJFF0NhbXB1cyBvZiBPcGVuIExlYXJuaW5nIkNsdXN0ZXIgSW5ub3ZhdGlvbiBDZW50cmUgKEMuSS5DLikdQ29sbGVnZSBPZiBWb2NhdGlvbmFsIFN0dWRpZXMvQ29sbGVnZSBvZiBWb2NhdGlvbmFsIFN0dWRpZXMgKFRlYWNoaW5nIENlbnRyZSkSRGF1bGF0IFJhbSBDb2xsZWdlHERlZW4gRGF5YWwgVXBhZGh5YXlhIENvbGxlZ2UuRGVlbiBEYXlhbCBVcGFkaHlheWEgQ29sbGVnZSAoVGVhY2hpbmcgQ2VudHJlKSBEZWxoaSBDb2xsZWdlIE9mIEFydHMgJiBDb21tZXJjZRpEZWxoaSBTY2hvb2wgb2YgSm91cm5hbGlzbWREZXBhcnRtZW50IG9mIEJvdGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZERlcGFydG1lbnQgb2YgQ2hlbWlzdHJ5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAWRGVwYXJ0bWVudCBvZiBDb21tZXJjZWREZXBhcnRtZW50IG9mIENvbXB1dGVyIFNjaWVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydG1lbnQgb2YgRWR1Y2F0aW9uIChDLkkuRS4pFURlcGFydG1lbnQgb2YgRW5nbGlzaBdEZXBhcnRtZW50IG9mIEdlb2dyYXBoeSpEZXBhcnRtZW50IG9mIEdlcm1hbmljIGFuZCBSb21hbmNlIFN0dWRpZXMTRGVwYXJ0bWVudCBvZiBIaW5kaRVEZXBhcnRtZW50IG9mIEhpc3RvcnktRGVwYXJ0bWVudCBvZiBMaWJyYXJ5IGFuZCBJbmZvcm1hdGlvbiBTY2llbmNlZERlcGFydG1lbnQgb2YgTWF0aGVtYXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICATRGVwYXJ0bWVudCBvZiBNdXNpY2REZXBhcnRtZW50IG9mIFBoeXNpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgH0RlcGFydG1lbnQgb2YgUG9saXRpY2FsIFNjaWVuY2UWRGVwYXJ0bWVudCBvZiBTYW5za3JpdGREZXBhcnRtZW50IG9mIFNvY2lhbCBXb3JrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZERlcGFydG1lbnQgb2YgU3RhdGlzdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkRGVwYXJ0bWVudCBvZiBab29sb2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIBhEZXNoYmFuZGh1IENvbGxlZ2UgKERheSkrRHIuIEFtYmVka2FyIENlbnRlciBmb3IgQmlvbWVkaWNhbCBSZXNlYXJjaCNEci4gQi5SLiBBbWJlZGthciAoVGVhY2hpbmcgQ2VudHJlKR1Eci4gQmhpbSBSYW8gQW1iZWRrYXIgQ29sbGVnZS5EdXJnYWJhaSBEZXNobXVraCBDb2xsZWdlIG9mIFNwZWNpYWwgRWR1Y2F0aW9uGER5YWwgU2luZ2ggQ29sbGVnZSAoRGF5KRhEeWFsIFNpbmdoIENvbGxlZ2UgKEV2ZSkdRmFjdWx0eSBvZiBNYW5hZ2VtZW50IFN0dWRpZXMNR2FyZ2kgQ29sbGVnZRBIYW5zIFJhaiBDb2xsZWdlIkhhbnMgUmFqIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUNSGluZHUgQ29sbGVnZRVJLlAuQ29sbGVnZSBGb3IgV29tZW42SW5kaXJhIEdhbmRoaSBJbnN0aXR1dGUgb2YgUGh5LiBFZHUuICYgU3BvcnRzIFNjaWVuY2VzLkluc3RpdHV0ZSBvZiBDeWJlciBTZWN1cml0eSBhbmQgTGF3IChJLkMuUy5MLikbSW5zdGl0dXRlIE9mIEhvbWUgRWNvbm9taWNzG0phbmtpIERldmkgTWVtb3JpYWwgQ29sbGVnZS1KYW5raSBEZXZpIE1lbW9yaWFsIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUUSmVzdXMgJiBNYXJ5IENvbGxlZ2UmSmVzdXMgJiBNYXJ5IENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUMSnViaWxlZSBIYWxsD0thbGluZGkgQ29sbGVnZSFLYWxpbmRpIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUTS2FtbGEgTmVocnUgQ29sbGVnZSRLZXNoYXYgTWFoYXZpZGxheWEgKFRlYWNoaW5nIENlbnRyZSkUS2VzaGF2IE1haGF2aWR5YWxheWESS2lyb3JpIE1hbCBDb2xsZWdlEkxhZHkgSXJ3aW4gQ29sbGVnZR5MYWR5IFNyaSBSYW0gQ29sbGVnZSBGb3IgV29tZW4STGFrc2htaWJhaSBDb2xsZWdlJExha3NobWliYWkgQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZQxMQVcgQ0VOVFJFLUkNTEFXIENFTlRSRS1JSRhNYWhhcmFqYSBBZ3Jhc2VuIENvbGxlZ2UqTWFoYXJhamEgQWdyYXNlbiBDb2xsZWdlIC0gVGVhY2hpbmcgQ2VudHJlJU1haGFyc2hpIFZhbG1pa2kgQ29sbGVnZSBvZiBFZHVjYXRpb24QTWFpdHJleWkgQ29sbGVnZSJNYWl0cmV5aSBDb2xsZWdlIC0gVGVhY2hpbmcgQ2VudHJlHU1hdGEgU3VuZHJpIENvbGxlZ2UgRm9yIFdvbWVuL01hdGEgU3VuZHJpIENvbGxlZ2UgRm9yIFdvbWVuIC0gVGVhY2hpbmcgQ2VudHJlDU1pcmFuZGEgSG91c2UfTWlyYW5kYSBIb3VzZSAoVGVhY2hpbmcgQ2VudHJlKRxNb3RpIExhbCBOZWhydSBDb2xsZWdlIChEYXkpHE1vdGkgTGFsIE5laHJ1IENvbGxlZ2UgKEV2ZSkoTW90aSBMYWwgTmVocnUgQ29sbGVnZSAoVGVhY2hpbmcgQ2VudHJlKSxOb24gQ29sbGVnaWF0ZSBXb21lbiBFZHVjYXRpb24gQm9hcmQgKE5DV0VCKRhQLkcuRC5BLlYuIENvbGxlZ2UgKERheSkYUC5HLkQuQS5WLiBDb2xsZWdlIChFdmUpJFAuRy5ELkEuVi4gQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZRBSYWpkaGFuaSBDb2xsZWdlIlJhamRoYW5pIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkbUmFtIExhbCBBbmFuZCBDb2xsZWdlIChEYXkpEVJhbWFudWphbiBDb2xsZWdlI1JhbWFudWphbiBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpDlJhbWphcyBDb2xsZWdlF1MuRy5ULkIuIEtoYWxzYSBDb2xsZWdlF1NhdHlhd2F0aSBDb2xsZWdlIChEYXkpF1NhdHlhd2F0aSBDb2xsZWdlIChFdmUpJFNhdHlhd2F0aSBDb2xsZWdlIChUZWFjaGluZyBDZW50cmUpIBdTY2hvb2wgb2YgT3BlbiBMZWFybmluZyJTaGFoZWVkIEJoYWdhdCBTaW5naCBDb2xsZWdlIChEYXkpIlNoYWhlZWQgQmhhZ2F0IFNpbmdoIENvbGxlZ2UgKEV2ZSk1U2hhaGVlZCBSYWpndXJ1IENvbGxlZ2Ugb2YgQXBwbGllZCBTY2llbmNlcyBmb3IgV29tZW4rU2hhaGVlZCBTdWtoZGV2IENvbGxlZ2Ugb2YgQnVzaW5lc3MgU3R1ZGllcw9TaGl2YWppIENvbGxlZ2UXU2h5YW0gTGFsIENvbGxlZ2UgKERheSkXU2h5YW0gTGFsIENvbGxlZ2UgKEV2ZSkxU2h5YW1hIFByYXNhZCBNdWtoZXJqZWUgQ29sbGVnZSAtIFRlYWNoaW5nIENlbnRyZShTaHlhbWEgUHJhc2FkIE11a2hlcmppIENvbGxlZ2UgZm9yIFdvbWVuFlNPTCBTdHVkeSBDZW50ZXIgU291dGgbU3JpIEF1cm9iaW5kbyBDb2xsZWdlIChEYXkpG1NyaSBBdXJvYmluZG8gQ29sbGVnZSAoRXZlKSdTcmkgQXVyb2JpbmRvIENvbGxlZ2UgKFRlYWNoaW5nIENlbnRyZSkpU3JpIEd1cnUgR29iaW5kIFNpbmdoIENvbGxlZ2UgT2YgQ29tbWVyY2U7U3JpIEd1cnUgR29iaW5kIFNpbmdoIENvbGxlZ2UgT2YgQ29tbWVyY2UgLSBUZWFjaGluZyBDZW50cmUhU3JpIEd1cnUgTmFuYWsgRGV2IEtoYWxzYSBDb2xsZWdlG1NyaSBSYW0gQ29sbGVnZSBPZiBDb21tZXJjZRhTcmkgVmVua2F0ZXN3YXJhIENvbGxlZ2UUU3QuIFN0ZXBoZW5zIENvbGxlZ2UaU3dhbWkgU2hyYWRkaGFuYW5kIENvbGxlZ2UTVW5pdmVyc2l0eSBvZiBEZWxoaRNWaXZla2FuYW5kYSBDb2xsZWdlJVZpdmVrYW5hbmRhIENvbGxlZ2UgLSBUZWFjaGluZyBDZW50cmUaWmFraXIgSHVzYWluIENvbGxlZ2UgKEV2ZSkgWmFraXIgSHVzYWluIERlbGhpIENvbGxlZ2UgKERheSkVfhI8LS0tLS1TZWxlY3QtLS0tLT4DMDAxBDEzMTQDMDAyBDEzMTUDMDU5AzAwMwMwMDcEMTMxNwMwMDgEMTMwNwMwMDkDMzA5A0NPTAMzMTIDMDEzBDEzMTgDMDE0AzAxNQQxMzI2AzAxNgMzMTYDMjE2AzIxNwMyNDEDMjM0AzI0MwMyMDMDMjI5AzIwNAMyMDUDMjMxAzIwNgMyMzUDMjQwAzIyMgMyMzIDMjEzAzIzMwMyMzcDMjIzAzAxOQMzMTgEMTMxNgMwMTADMzE0AzAyMQMwMjIDMTA5AzAyNAMwMjUEMTMxMwMwMjYDMDI5AzAyOAMzMTcDMDMwAzAzMQQxMzA0AzAzMgQxMzA4AzMwNgMwMzMEMTMwNQMwMzQEMTMxOQMwMzUDMDM2AzAzOAMwMzkDMDQwBDEzMTADMzEwAzMxMQMwNDEEMTMwMgMzMTUDMDQzBDEzMDkDMDQ0BDEzMDMDMDQ3BDEzMjADMDQ4AzA0OQQxMzIxAzMwNwMwNTMDMDU0BDEzMTEDMDU1BDEzMjIDMDU4AzAyMAQxMzIzAzA1NgMwNjgDMDYyAzA2MwQxMzI0A1NPTAMwNjQDMDY1AzA2NgMwNjcDMDcxAzA3MwMwNzQEMTMwNgMwNzUEU09MUwMwNzYDMDc3BDEzMjUDMDc4BDEzMTIDMDY5AzA3MgMwNzkDMDgwAzA4MQMxMDADMDg0BDEzMDEDMDg2AzA4NRQrA35nZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dkZAIdD2QWAmYPZBYCAgMPDxYCHghJbWFnZVVybAVDR2VuZXJhdGVDYXB0Y2hhLmFzcHg',
  viewStateGenerator : 
    '35D4F7A9'  
};