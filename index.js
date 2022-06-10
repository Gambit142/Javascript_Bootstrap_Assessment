const container = document.querySelector('.container');
container.innerHTML = `<button type="button" class="modal-btn btn btn-outline-success btn-lg" data-bs-toggle="modal" data-bs-target="#modalWindow">Click Me!</button>
                        <div class="modal fade" id="modalWindow" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p class="text-center h2 text-primary">It Works</p>
                              </div>
                            </div>
                          </div>
                        </div>`
container.style.height = '100vh';
