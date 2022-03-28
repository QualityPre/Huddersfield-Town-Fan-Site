import React from 'react';

export default function IndexPage() {
    return (
        <div className="px-5 md:container md:mx-auto py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
