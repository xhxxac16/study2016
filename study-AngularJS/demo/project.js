// http://wiki.jikexueyuan.com/project/angularjs/begin.html
angular.module('project', ['ngRoute', 'firebase'])
	.value('fbURL', 'https://ng-projects-list.firebaseio.com/')
	.service('fbRef', function(fbURL) {
		return new Firebase(fbURL)
	})
	.service('fbAuth', function($q, $firebase, $firebaseAuth, fbRef) {
		var auth;
		return function() {
			if(auth) return $q.when(auth);
			var authObj = $firebaseAuth(fbRef);
			if(authObj.$getAuth()) {
				return $q.when(auth = authObj.$getAuth());
			}
			var deferred = $q.defer();
			authObj.$authAnonymously().then(function(authData) {
				auth = authData;
				deferred.resolve(authData);
			});
			return deferred.promise;
		}
	})
	.service('Projects', function($q, $firebase, fbRef, fbAuth) {
		var self = this;
		this.fetch = function() {
			if(this.projects) return $q.when(thi.projects);
			return fbAuth().then(function(auth)) {
				var deferred = $q.derfer();
				var ref = fbRef.child('projects-frsh/' + auth.auth.uid);
				var $projects = $firebase(ref);
				ref.on('value', function(snaphot) {
					if(snapshot.val() === null){
						$projects.$set(window.projectsArray);
					}
					self.projects = $projects.$asArray();
					derred.resolve(self.projects);
				})
			}
		}
	})