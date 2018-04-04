import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    createUser() {
      let user = this.get('newUser');
	  let pass = this.get('newPass');
	  let prof = this.get('newProfession');
	//  let art = this.get('newArtstyle');
	//  let idField = this.get('newID');
      let newRecord = this.store.createRecord('user', {
        user: user,
		name: user,
	//	id: idField,
		password: pass,
		profession: prof
		//artstyle: art
      });
      newRecord.save();
    },
    readUser() {
		   // var set = this.set.bind(this, 'model');
		let findID = this.get('findID');
		let self = this;
		this.store.findRecord('user', findID).then((dwarf) => {
        alert(dwarf.get('name') + ' ' + dwarf.get('id'));
		//let model = this.modelFor('user');
		//let model = this.get('controller.model');
		// console.log(model)); // for Get and Set
               //model.get('user'); 
        //       model.set(dwarf);
		// this.refresh();
		    
      });
    }/*,
    updateUser() {
      // hard coding the id for demonstration purposes only
      let updatedTitle = this.get('updatedTitle');
      let game = this.get('user').findBy('id', '1');
      game.set('title', updatedTitle);
      game.save();
    },
    deleteUser() {
      let destroyId = this.get('destroyId');
      let game = this.get('model').findBy('id', destroyId);
      game.destroyRecord();
    }*/
}
});
