import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Dialog, Transition } from '@headlessui/react';

const Register = () => {
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('')
        setSuccess(false)

        if (password.length < 6) {
            setError('Password must be six characters long')
            return
        }
        const openModal = () => {
            setIsOpen(true);
          };
        
          const closeModal = () => {
            setIsOpen(false);
          };

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                setSuccess(true)

                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated!')
                    })
                    .catch((error) => setError(error.message));
                form.reset()
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5">Please Register!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" id="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" id="photo" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" id="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" id="password" placeholder="password" className="input input-bordered" required />
                                <p className='text-red-500 text-xs mt-3'>{error}</p>
                                <p className='text-red-500 text-xs mt-3'>{success}</p>
                                <label className="label">
                                    <span className='text-xs'>Already have an account?<button className="btn btn-link text-xs"><Link to="/login">Login</Link></button></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={openModal}>Open Modal</button>
                                <Transition show={isOpen} as={Fragment}>
                                    <Dialog
                                        onClose={closeModal}
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                    >
                                        <div className="flex items-center justify-center min-h-screen">
                                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                                            <div className="bg-white rounded-lg w-96 p-4">
                                                <Dialog.Title className="text-lg font-medium">Modal Title</Dialog.Title>
                                                <Dialog.Description className="text-gray-500">
                                                    Modal description goes here.
                                                </Dialog.Description>
                                                <button onClick={closeModal}>Close Modal</button>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

{/* The button to open modal */ }


{/* Put this part before </body> tag */ }
