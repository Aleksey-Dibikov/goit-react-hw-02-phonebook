(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={TaskEditor_input:"Filter_TaskEditor_input__3mmaw"}},19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(11),c=n.n(s),r=(n(19),n(13)),o=n(7),u=n(2),l=n(3),d=n(5),b=n(4),m=(n(20),n(23)),h=n(8),j=n(6),p=n.n(j),_=n(0),f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(h.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(o.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.TaskEditor,children:[Object(_.jsx)("label",{id:Object(m.a)(),className:p.a.TaskEditor_label,children:Object(_.jsx)("input",{className:p.a.TaskEditor_input,id:Object(m.a)(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})}),Object(_.jsx)("label",{id:Object(m.a)(),className:p.a.TaskEditor_label,children:Object(_.jsx)("input",{className:p.a.TaskEditor_input,id:Object(m.a)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})}),Object(_.jsx)("button",{className:p.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=f,k=n(9),C=n.n(k),v=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(_.jsx)("ul",{className:C.a.TaskList,children:this.props.contacts.map((function(e){return Object(_.jsxs)("li",{className:C.a.TaskList_item,children:[e.name," : ",e.number,Object(_.jsx)("button",{className:C.a.TaskList_button,onClick:function(){return t.props.onDeleteContact(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))})}}]),n}(a.Component),T=v,x=n(12),g=n.n(x),E=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Find contacts by name"}),Object(_.jsx)("input",{className:g.a.TaskEditor_input,type:"text",value:this.props.value,onChange:function(e){return t.props.onChangeFilter(e.target.value)}})]})}}]),n}(a.Component),y=E,L=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=t.state.contacts.map((function(t){return t.name})).includes(e.name);if(n)alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var a=Object(o.a)(Object(o.a)({},e),{},{id:Object(m.a)()});t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(r.a)(e),[a])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(O,{onAddContact:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),e.length>=1&&Object(_.jsx)(y,{value:t,onChangeFilter:this.changeFilter}),Object(_.jsx)(T,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),A=L;c.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(A,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={TaskEditor:"ContactsForm_TaskEditor__2SpKJ",TaskEditor_label:"ContactsForm_TaskEditor_label__3mh44",TaskEditor_input:"ContactsForm_TaskEditor_input__2kErt",TaskEditorinput:"ContactsForm_TaskEditorinput__1tfGI",TaskEditor_button:"ContactsForm_TaskEditor_button__1KM73"}},9:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__2ySUV",TaskList_item:"ContactList_TaskList_item__3Cb2J",TaskList_button:"ContactList_TaskList_button__3ZmQt"}}},[[22,1,2]]]);
//# sourceMappingURL=main.d01cc7c2.chunk.js.map