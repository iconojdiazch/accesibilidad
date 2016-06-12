/*
 * Ext JS Library 3.0 RC2
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */


Ext.FormPanel=Ext.extend(Ext.Panel,{buttonAlign:'center',minButtonWidth:75,labelAlign:'left',monitorValid:false,monitorPoll:200,layout:'form',initComponent:function(){this.form=this.createForm();Ext.FormPanel.superclass.initComponent.call(this);this.bodyCfg={tag:'form',cls:this.baseCls+'-body',method:this.method||'POST',id:this.formId||Ext.id()};if(this.fileUpload){this.bodyCfg.enctype='multipart/form-data';}
this.initItems();this.addEvents('clientvalidation');this.relayEvents(this.form,['beforeaction','actionfailed','actioncomplete']);},createForm:function(){delete this.initialConfig.listeners;return new Ext.form.BasicForm(null,this.initialConfig);},initFields:function(){var f=this.form;var formPanel=this;var fn=function(c){if(formPanel.isField(c)){f.add(c);}if(c.isFieldWrap){Ext.applyIf(c,{labelAlign:c.ownerCt.labelAlign,labelWidth:c.ownerCt.labelWidth,itemCls:c.ownerCt.itemCls});f.add(c.field);}else if(c.doLayout&&c!=formPanel){Ext.applyIf(c,{labelAlign:c.ownerCt.labelAlign,labelWidth:c.ownerCt.labelWidth,itemCls:c.ownerCt.itemCls});if(c.items){c.items.each(fn,this);}}};this.items.each(fn,this);},getLayoutTarget:function(){return this.form.el;},getForm:function(){return this.form;},onRender:function(ct,position){this.initFields();Ext.FormPanel.superclass.onRender.call(this,ct,position);this.form.initEl(this.body);},beforeDestroy:function(){Ext.FormPanel.superclass.beforeDestroy.call(this);this.stopMonitoring();Ext.destroy(this.form);},isField:function(c){return!!c.setValue&&!!c.getValue&&!!c.markInvalid&&!!c.clearInvalid;},initEvents:function(){Ext.FormPanel.superclass.initEvents.call(this);this.on('remove',this.onRemove,this);this.on('add',this.onAdd,this);if(this.monitorValid){this.startMonitoring();}},onAdd:function(ct,c){if(this.isField(c)){this.form.add(c);}else if(c.findBy){Ext.applyIf(c,{labelAlign:c.ownerCt.labelAlign,labelWidth:c.ownerCt.labelWidth,itemCls:c.ownerCt.itemCls});this.form.add.apply(this.form,c.findBy(this.isField));}},onRemove:function(ct,c){if(this.isField(c)){Ext.destroy(c.container.up('.x-form-item'));this.form.remove(c);}else if(c.findByType){Ext.each(c.findBy(this.isField),this.form.remove,this.form);}},startMonitoring:function(){if(!this.validTask){this.validTask=new Ext.util.TaskRunner();this.validTask.start({run:this.bindHandler,interval:this.monitorPoll||200,scope:this});}},stopMonitoring:function(){if(this.validTask){this.validTask.stopAll();this.validTask=null;}},load:function(){this.form.load.apply(this.form,arguments);},onDisable:function(){Ext.FormPanel.superclass.onDisable.call(this);if(this.form){this.form.items.each(function(){this.disable();});}},onEnable:function(){Ext.FormPanel.superclass.onEnable.call(this);if(this.form){this.form.items.each(function(){this.enable();});}},bindHandler:function(){var valid=true;this.form.items.each(function(f){if(!f.isValid(true)){valid=false;return false;}});if(this.fbar){var fitems=this.fbar.items.items;for(var i=0,len=fitems.length;i<len;i++){var btn=fitems[i];if(btn.formBind===true&&btn.disabled===valid){btn.setDisabled(!valid);}}}
this.fireEvent('clientvalidation',this,valid);}});Ext.reg('form',Ext.FormPanel);Ext.form.FormPanel=Ext.FormPanel;