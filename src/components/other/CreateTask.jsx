import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="bg-[#1c1c1c] mt-10 p-8 rounded-xl">
        <form className="flex gap-20 justify-between">
          {/* Left Side */}
          <div className="w-1/2">
            <div className="mb-5">
              <h3 className="text-lg mb-2">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full py-2 px-3 rounded border border-zinc-500 bg-transparent outline-none"
              />
            </div>

            <div className="mb-5">
              <h3 className="text-lg mb-2">Date</h3>
              <input
                type="date"
                className="w-full py-2 px-3 rounded border border-zinc-500 bg-transparent outline-none"
              />
            </div>

            <div className="mb-5">
              <h3 className="text-lg mb-2">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="w-full py-2 px-3 rounded border border-zinc-500 bg-transparent outline-none"
              />
            </div>

            <div>
              <h3 className="text-lg mb-2">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full py-2 px-3 rounded border border-zinc-500 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 flex flex-col">
            <h3 className="text-lg mb-2">Description</h3>

            <textarea
              rows="10"
              className="w-full border border-zinc-500 rounded p-3 bg-transparent resize-none outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-emerald-500 hover:bg-emerald-600 py-3 rounded text-lg font-semibold"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
