profile.factory("profileService", ["$http", "$q", function($http, $q) {
	return {
		getAllJobs: function() {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/api/jobs",
				headers: {
					"Authorization": "Basic " + btoa(auth)
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data["detail"])
			}, function errorCallback(response) {
				deferred.reject(response.data["detail"])
			})

			return promise
		},

		getJobById: function(job_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/api/job/" + job_id,
				headers: {
					"Authorization": "Basic " + btoa(auth)
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data["detail"])
			}, function errorCallback(response) {
				deferred.reject(response.data["detail"])
			})

			return promise
		},

		deleteJobById: function(job_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "DELETE",
				url: "http://" + CURRENT_URL + ":8000/api/job/" + job_id,
				headers: {
					"Authorization": "Basic " + btoa(auth)
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data["detail"])
			}, function errorCallback(response) {
				deferred.reject(response.data["detail"])
			})

			return promise
		},

		abortJobById: function(job_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "PUT",
				url: "http://" + CURRENT_URL + ":8000/api/job/" + job_id,
				headers: {
					"Authorization": "Basic " + btoa(auth)
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data["detail"])
			}, function errorCallback(response) {
				deferred.reject(response.data["detail"])
			})

			return promise
		},

		startJob: function(serialized_data) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "POST",
				url: "http://" + CURRENT_URL + ":8000/api/jobs",
				data: serialized_data,
				headers: {
					"Authorization": "Basic " + btoa(auth),
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data["detail"])
			}, function errorCallback(response) {
				deferred.reject(response.data["detail"])
			})

			return promise
		},

		getHomeDir: function() {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/fs/file/home/",
				headers: {
					"Authorization": "Basic " + btoa(auth),
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data)
			}, function errorCallback(response) {
				deferred.reject(response.data)
			})

			return promise
		},

		getSubFilesById: function(dir_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/fs/file/",
				params: {
					"sub_file": dir_id
				},
				headers: {
					"Authorization": "Basic " + btoa(auth),
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data)
			}, function errorCallback(response) {
				deferred.reject(response.data)
			})

			return promise
		},

		uploadFile: function(formData) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$.ajax({
				url: "http://" + CURRENT_URL + ":8000/fs/file/",
				type: "POST",
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				headers: {
					"Authorization": "Basic " + btoa(auth)
				},
				xhr: function(){
					var xhr = $.ajaxSettings.xhr();
					if(onprogress && xhr.upload) {
						xhr.upload.addEventListener("progress" , onprogress, false);
						return xhr;
					}
				},
				success: function(data) {
					deferred.resolve(data)
				},
				error: function(data) {
					deferred.reject(data["responseJSON"])
				}
			})

			return promise
		},

		deleteFileById: function(file_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}

			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "DELETE",
				url: "http://" + CURRENT_URL + ":8000/fs/file/" + file_id + "/",
				headers: {
					"Authorization": "Basic " + btoa(auth),
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data)
			}, function errorCallback(response) {
				deferred.reject(response.data)
			})

			return promise
		},

		getFileById: function(file_id) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}
			
			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/fs/file/" + file_id + "/",
				headers: {
					"Authorization": "Basic " + btoa(auth),
				}
			}).then(function successCallback(response) {
				deferred.resolve(response.data)
			}, function errorCallback(response) {
				deferred.reject(response.data)
			})

			return promise
		},

		getFileContent: function(file_path) {
			var auth = ""

			if (!DEBUG) {
				auth = checkLogin()
			} else {
				auth = TEST_AUTH
			}
			
			var deferred = $q.defer()
			var promise = deferred.promise
			$http({
				method: "GET",
				url: "http://" + CURRENT_URL + ":8000/file-api/",
				params: {
					"username": auth.split(":")[0],
					"path": file_path
				},
			}).then(function successCallback(response) {
				deferred.resolve(response.data["content"])
			}, function errorCallback(response) {
				deferred.reject("error")
			})

			return promise
		}
	}
}])
