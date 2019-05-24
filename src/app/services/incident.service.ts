import { Injectable } from '@angular/core';
import { Incident } from './appModels';
import { Comment } from './appModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { PostComment, UpdateIncident, EditIncident } from '../services/appModels'

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  incidentSelect :Incident = {
    submittedBy:'',
    submittedTo:'',
    submittedFrom:'',
    priority:'',
    currentStatus:'',
    assignedTo:'',
    issue:'',
    editedAt:'',
    comments:{
      email:'',
      comment:'',
      time:''
    },

    time : new Date().toLocaleDateString()
  };

  editIncidentSelect :UpdateIncident = {
    id:'',
    submittedBy:'',
    submittedTo:'',
    submittedFrom:'',
    priority:'',
    currentStatus:'',
    assignedTo:'',
    issue:'',
    editedAt:''
  };

  constructor( private http: HttpClient ) { }

  addIncident(incident:Incident){
    return this.http.post(environment.incidents+'/add',incident);
}

  createComment(comment:PostComment, id){
    return this.http.post(environment.incidents+'/createcomment/'+id,comment);
  }
  editIncident(incident:EditIncident, id){
    return this.http.post(environment.incidents+'/edit/'+id,incident);
  }

  deleteIncident(id){
    return this.http.delete(environment.incidents+'/delete/'+id);
  }

}
