import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useState, useEffect } from 'react'

const services = [
  {
    name: 'Edinburgh',
    service: [
      {
        features: "Meet",
        fundametal: true,
        standard: true,
        teaching: true,
        plus: true,
      },
      {
        features: "Docs",
        fundametal: true,
        standard: true,
        teaching: true,
        plus: false,
      },
    ],
  },
  {
    name: 'Edinburghs',
    service: [
      {
        features: "Docs",
        fundametal: true,
        standard: true,
        teaching: true,
        plus: false,
      },
      {
        features: "Sheet",
        fundametal: false,
        standard: true,
        teaching: true,
        plus: false,
      },
    ],
  },
  // More service...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  const [state, setState] = useState({
    activeState0: false,
    activeState1: false,
    activeState2: false,
    activeState3: false,
    activeState4: false,
    activeState5: false,
    activeState6: false,
  })
  const [serviceIndx, setServiceIndx] = useState(null)
  const toggleOpenState = (id) => {
    setState(prevState => ({ ...prevState, [`activeState` + id ]: !prevState[`activeState` + id ] }))
  }
  
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Features
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Fundametal
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                     Standard
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Teaching
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Pluse
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {services.map((service, index) => (
                    <Fragment key={index}>
                      <tr className="border-t border-gray-200"
                        onClick={() =>toggleOpenState(index)}
                      >
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="flex items-center cursor-pointer bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          {service.name}
                          <svg
                            className={state[`activeState${index}`] ? 'transform rotate-180' : ''}
                            viewBox="0 0 24 24"
                            width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M12 8l6 6H6z"/>
                          </svg>
                        </th>
                      </tr>
                      {service.service.map((features, featuresIdx) => (
                        <tr
                          key={featuresIdx}
                          className={[classNames(featuresIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')]}
                          style={{display: !state[`activeState${index}`] ? 'none' : ''}}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {features.features}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          { features.fundametal
                            ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <span>--</span>
                          }
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          { features.standard
                            ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <span>--</span>
                          }
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          { features.teaching
                            ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <span>--</span>
                          }
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          { features.plus
                            ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <span>--</span>
                          }
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
